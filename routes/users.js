var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username : 'cart0n'},
    {id: 2, username : 'pard0n'},
    {id: 3, username : 'gard0n'},
    {id: 4, username : 'calg0n'}
  ]);
});

module.exports = router;
