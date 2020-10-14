const express = require('express');
const router = express.Router();
const controller=require('./controller');

router
    .route('/')
    .get(controller.getinformation)
    .post(controller.postinformation)
    .put(controller.putinformation)
    .delete(controller.deleteinformation)


       
  
module.exports = router;
