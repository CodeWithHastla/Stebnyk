const express = require('express');
const router = express.Router();

router.use(function (req,res,next){
    console.log('Date' , new Date() , 'method' , req.method , 'URL' , req.originalUrl , 'Ip' , req.ip);
    next();
});
module.exports = router;