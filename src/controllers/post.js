const postService = require('../service/Post');

const get = async (_req, res) => {
  const result = await postService.get();

  return res.status(200).json(result);
};

module.exports = {
  get,
};