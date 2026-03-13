const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found', page: null });
});

module.exports = app;
