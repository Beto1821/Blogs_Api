const { PostCategory } = require('../models');

const get = async (req, res) => {
  const post = await PostCategory.findAll();
  res.status(200).json(post);
};

module.exports = {
  get,
};