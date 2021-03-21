var express = require('express');
var router = express.Router();
const challenge = require('../server');

router.use('/crossword', challenge);
router.use('/wordsearch', challenge);
router.use('/rapidfire', challenge);
router.use('/quiz', challenge);

module.exports = router;