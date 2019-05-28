var express = require('express');
var router = express.Router();
const Portfolio = require('../models/portfolio')


router.get('/portfolios/:id/stocks/new', (req, res)=>{
    Portfolio.findById(req.params.id)
    .then(one =>{
        res.render('../views/stock/new', {one})
    })
})



router.post('/portfolios/:id/stocks', (req, res)=>{
    Portfolio.findById(req.params.id)
    .then(one =>{
        one.stock.push(req.body)
        one.save(()=>{
            res.redirect(`/portfolios/${one._id}`)
        })
    })
})

router.delete('/portfolios/:id/stocks/:idx', (req, res)=>{
    Portfolio.findById(req.params.id)
    .then(port =>{
        port.stock.remove(req.params.idx)
        port.save(()=>{
            res.redirect(`/portfolios`)
        })
    })
})






module.exports = router;