const { User } = require('../models');
const geraToken = require('../util/geraToken');
// const decodeToken = require('../util/decoToken');
const validaAddUser = require('../middlewares/validaAddUser');
const UserService = require('../service/User');

const insert = async (req, res) => {
  const { error } = validaAddUser(req.body);
  if (error) return res.status(400).json({ message: error.message });
  
  const { email, password, image, displayName } = req.body;

  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  await User.create({ displayName, email, password, image });
  const token = geraToken(req.body.email);
  return res.status(201).json({ token });
};

const get = async (req, res) => {
  const users = await User.findAll({
  attributes: { exclude: ['password'] },
});
return res.status(200).json(users);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const userId = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(userId);
};

const deleteMe = async (req, res) => {
  const { authorization } = req.headers;
  await UserService.deleteId(authorization);
  res.sendStatus(204);
};

module.exports = {
  insert,
  get,
  getId,
  deleteMe,
};