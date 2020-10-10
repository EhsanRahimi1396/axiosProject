const express = require('express');
const router = express.Router();
const controller=require('./controller');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: ' GET REQUEST'
    })

}).catch(err => {
    res.status(500).json({
        error: err
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: ' POST REQUEST'
    })
}).catch(err => {
    res.status(500).json({
        error: err
    })
})

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: ' PATCH REQUEST'
    })
}).catch(err =>{
    res.status(500).json({
        error:err
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message:'DELETE REQUEST'
    })
}).catch(err =>{
    res.status(500).json({
        error:err
    })
})

module.exports = router;
