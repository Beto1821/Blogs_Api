const express = require('express');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
const categoriesRoutes = require('./routes/categories');
const postRoutes = require('./routes/post');

// ...

const app = express();

app.use(express.json());
app.use(loginRoutes);
app.use(userRoutes);
app.use(categoriesRoutes);
app.use(postRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
