const { BlogPost, User, Category, PostCategory } = require('../models');
const postService = require('../service/Post');

const get = async (req, res) => {
  console.log('aioioi');
  const post = await BlogPost.findAll();
  console.log(post);
  res.status(200).json(post);
};

module.exports = {
  get,
};