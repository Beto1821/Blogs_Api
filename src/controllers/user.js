const { User } = require('../models/User');
const geraToken = require('../util/geraToken');
const validaAddUser = require('../middlewares/validaAddUser');

const insert = async (req, res) => {
  const { error } = validaAddUser(req.body);
  if (error) return res.status(400).json({ message: error.message });
  
  const { dispkayName, email, password, image } = req.body;

  // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
 const user = await User.findOne({ where: { email: req.body.email } });

if (user) return res.status(409).json({ message: 'User already registered' });

await User.create({ dispkayName, email, password, image });
  
const token = geraToken(req.body.email);

return res.status(201).json({ token });
};

module.exports = {
  insert,
};