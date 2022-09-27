const postService = require('../service/Post');
const { Category, BlogPost } = require('../models');
const validaBody = require('../middlewares/validaBody');


const get = async (_req, res) => {
  const result = await postService.get();

  return res.status(200).json(result);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const userId = await postService.getId(id);
  if (!userId) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(userId);
};

const insert = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;
    
    if ([title, content, categoryIds].some((item) => !item)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const { message } = await CategoryService.checkCategoriesExistence(categoryIds);
    if (message) return res.status(400).json({ message });

    const userId = await UserService.findUserIdByToken(authorization);
    const postData = await BlogPostService.create({ title, content, userId });

    await Promise.all(categoryIds.map(async (categoryId) => {
      await PostCategoryService.insert(postData.id, categoryId);
    }));

    return res.status(201).json(post);
  }

module.exports = {
  get,
  getId,
  insert,
};