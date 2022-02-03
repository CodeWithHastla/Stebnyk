const express = require('express');
const router = express.Router();
const books = [{id:1 ,
    author: 'google' ,
    title : 'best'}];
router.get('/', function (req,res,next){
    res.json(books);
})
router.get('/:id',function (req,res,next){
    const bookId = parseInt(req.params.id , 10);

    const book = books.find(book => book.id === bookId);
    res.json(book);
    if(book){
        return res.json(book);
    }
    return res.status(404).json({
        status: 'Not found'
    });
    //res.send(req.params.id);
});

module.exports=router;
