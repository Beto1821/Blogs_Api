const jwt = require('jsonwebtoken');
require('dotenv');

const { JWT_SECRET, MYSQL_USER, MYSQL_PASSWORD } = process.env;
console.log({ JWT_SECRET, MYSQL_USER, MYSQL_PASSWORD });

module.exports = (email) => {
  const token = jwt.sign({ data: email }, JWT_SECRET);

  return token;
};