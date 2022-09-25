const decoToken = require('../util/decoToken');
const { User } = require('../models');

const findId = async (Authorization) => {
  const { id } = await User.findOne({ where: { email: decoToken(Authorization)}})
  return id;
};

const deleteId = async (Authorization) => {
  const userId = await findId(Authorization);
  await User.destroy({ where: { id: userId} })
};

module.exports = {
  deleteId,
};