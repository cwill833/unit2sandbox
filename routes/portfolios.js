var express = require('express');
var router = express.Router();
const Portfolio = require('../models/portfolio')

router.get('/', (req, res)=>{
    Portfolio.find({})
    .then(portfolios=>{
        res.render('../views/show', {portfolios})
    })
})

router.get('/:id', (req, res)=>{
    Portfolio.findById(req.params.id)
    .then(one =>{
        res.render('../views/one', {one})
    })
})

router.get('/:id/edit', (req,res)=>{
    Portfolio.findById(req.params.id)
    .then(one =>{
        res.render('../views/edit', {one})
    })
})

router.put('/:id', (req, res)=>{
    Portfolio.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(one=>{
        one.save()
        res.redirect('/portfolios')
    })
})

router.delete('/:id', (req,res)=>{
    Portfolio.findByIdAndDelete(req.params.id)
    .then(()=>{
        console.log('done')
        res.redirect('/portfolios')
    })
})






module.exports = router;