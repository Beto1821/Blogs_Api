const jwt = require('jsonwebtoken');
require('dotenv');

module.exports = (token) => {
  const { data } = jwt.verify(token, process.env.JWT_SECRET);

  return data;
};