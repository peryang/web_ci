var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

var content = require('./routes/content'); 
var list = require('./routes/list');
var login = require('./routes/login');
var logout = require('./routes/logout');

app.use('/content', content);
app.use('/list', list);
app.use('/login', login);
app.use('/logout', logout);

// 错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
//app.listen(3000);
//console.log("app running at http://localhost:3000");

module.exports = app;