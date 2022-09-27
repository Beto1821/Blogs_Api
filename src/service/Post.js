const { BlogPost, User, Category, PostCategory } = require('../models');

const get = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });
  return result;
};

const getId = async (id) => {
  const result = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });
  return result;
};

const insert = async (postId, categoryId) => {
  await PostCategory.create({ postId, categoryId });
};

module.exports = {
  get,
  getId,
  insert,
};