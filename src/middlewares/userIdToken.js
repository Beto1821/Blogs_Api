const decoToken = require('../util/decoToken');
const { User } = require('../models');

const getUserId = async (authorization) => {
  const user = await User.findOne({ where: { email: decoToken(authorization) } });
  return user;
};

module.exports = getUserId;