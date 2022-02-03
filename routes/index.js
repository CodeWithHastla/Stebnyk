const express = require('express');
const router = express.Router();
const server = require('http').Server(router);
const io = require('socket.io')(server);

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
