const express = require('express');
const auth = require('./auth');
const book = require('./book');
const cart = require('./cart');
const users = require('./users');
const router = express.Router();


router.use('/', auth);
router.use('/book', book);
router.use('/users', users);
router.use('/cart', cart);

module.exports = router;
