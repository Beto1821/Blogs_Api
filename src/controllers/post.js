const { BlogPost, User, Category } = require('../models');

const get = async (req, res) => {
  const post = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'blogpost',
        through: { attributes: [] },
      },
    ],
  });
  res.status(200).json(post);
};

module.exports = {
  get,
};