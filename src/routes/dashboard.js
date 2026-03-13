const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('dashboard', { title: 'Dashboard', page: 'dashboard' });
});

module.exports = router;
