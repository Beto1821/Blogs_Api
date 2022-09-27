const decoToken = require('../util/decoToken');
const { User } = require('../models');

const findId = async (Authorization) => {
  const id = await User.findOne({ where: { email: decoToken(Authorization) } });
  return id;
};

const deleteId = async (authorization) => {
  const user = await findId(authorization);
  await User.destroy({ where: { id: user.id } });
};

module.exports = {
  deleteId,
};