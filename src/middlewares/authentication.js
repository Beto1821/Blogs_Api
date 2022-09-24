const joi = require('joi');
const { User } = require('../models');
const geratoken = require('../util/geraToken');
require('dotenv').config();

const validateBody = (body) =>
  joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  }).validate(body);

module.exports = async (req, res) => {
  const { error } = validateBody(req.body);

  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
    
  const user = await User.findOne({ where: { email: req.body.email } }).catch(console.log);
  console.log(typeof user);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const token = geratoken(req.body.email);
  res.status(200).json({ token });
};