const { Category } = require('../models');

const get = async (req, res) => {
  const categ = await Category.findAll()
  res.status(200).json(categ);
};

module.exports = {
  get,
};