let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtosDestaque');
});

router.get('/produtos/detalhes', function(req, res, next) {
  res.render('detalheDeProduto');
});

router.get('/home', function(req, res, next) {
  res.render('');
});


module.exports = router;
