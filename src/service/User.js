const decoToken = require('../util/decoToken');
const { User } = require('../models');

const findId = async (Authorization) => {
  console.log('aiaia', decoToken(Authorization));
  const id = await User.findOne({ where: { email: decoToken(Authorization) } });
  return id;
};

const deleteId = async (authorization) => {
  const user = await findId(authorization);
  console.log(user);
  await User.destroy({ where: { id: user.id } });
};

module.exports = {
  deleteId,
};