const { User } = require('../models');
const geraToken = require('../util/geraToken');
const validaAddUser = require('../middlewares/validaAddUser');

const insert = async (req, res) => {
  const { error } = validaAddUser(req.body);
  if (error) return res.status(400).json({ message: error.message });
  
  const { email, password, image, displayName } = req.body;

  // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
const user = await User.findOne({ where: { email: req.body.email } });

if (user) return res.status(409).json({ message: 'User already registered' });

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

module.exports = {
  insert,
  get,
};