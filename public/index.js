var express = require('express');
var router = express.Router();

//编写执行函数
router.get('/', function(req, res, next) {
    //使用绝对定位打开views下面的html文件
    res.sendFile("/*****/" + "index.html" );
});

module.exports = router;