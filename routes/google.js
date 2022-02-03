const express = require('express');
const router = express.Router();


router.get('/' , function (req,res,next){
    res.redirect('https://www.google.com');
    res.send('hpph');
})
module.exports = router;
// Тут показана функція редіректу