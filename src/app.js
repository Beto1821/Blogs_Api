const express = require('express');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');

// ...

const app = express();

app.use(express.json());
app.use(loginRoutes);
app.use(userRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
