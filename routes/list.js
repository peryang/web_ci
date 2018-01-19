var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  if(req.session.user){
    res.send("fdsafkds;a");
  }else{
    res.send("list error");
  }
});

module.exports = router;
