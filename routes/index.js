var express = require('express');
var router = express.Router();
const Portfolio = require('../models/portfolio')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});
router.post('/addportfolio', (req, res, next)=>{
  var port = new Portfolio(req.body)
  port.save()
  .then(item=>{
    res.render('../views/portfolio', {item})
    console.log(item)
  })
  .catch(err=>{
    res.status(400).send('unable to save')
  })
})



module.exports = router;
