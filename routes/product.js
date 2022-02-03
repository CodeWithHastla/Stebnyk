const express = require('express');
const router = express.Router();
const products = ['banana' , 'potato' , 'milk'];
router.get('/' , function(req,res,next){
    res.send(products);
});
router.get('/:id',function (req,res,next){
    res.send(products[req.params.id]);
});
module.exports = router;
// Тут показано як находити елемент завдяки id