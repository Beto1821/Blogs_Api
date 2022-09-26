const postService = require('../service/Post');

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

module.exports = {
  get,
  getId,
};