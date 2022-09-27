const postService = require('../service/Post');
const { Category, BlogPost } = require('../models');
const validaBody = require('../middlewares/validaBody');
const getUserId = require('../middlewares/userIdToken');
 
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
    
    const { error } = validaBody(req.body);
    if (error) return res.status(400).json({ message: 'Some required fields are missing' });

    const array = await Category.findAll({
    where: { id: categoryIds },
  });
  if (array.length === 0) { return res.status(400).json({ message: '"categoryIds" not found' }); }
  
  const { dataValues: { id: userId } } = await getUserId(authorization);
  const inserted = await BlogPost
  .create({ title, content, userId, updated: new Date(), published: new Date(),
  });  
  await Promise.all(categoryIds.map(async (categoryId) => {
  await postService.insert(inserted.id, categoryId);
}));
      return res.status(201).json(inserted);
};

const updated = async (req, res) => {
  const { title, content } = req.body;
  const updateId = req.params.id;
  const { authorization } = req.headers;

    if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { dataValues: { id } } = await getUserId(authorization);
  const post = await BlogPost.findOne({ updateId });

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  if (post.userId !== id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  const updatedPost = await postService.update(updateId, title, content);
  return res.status(200).json(updatedPost);
};

module.exports = {
  get,
  getId,
  insert,
  updated,
};