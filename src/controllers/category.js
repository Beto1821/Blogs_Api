const { Category } = require('../models');

const get = async (req, res) => {
  const categ = await Category.findAll();
  res.status(200).json(categ);
};

const insert = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const post = await Category.create({ name });
  return res.status(201).json(post);
};

module.exports = {
  get,
  insert,
};