var express = require('express'),
    app = express(),
    session = require('express-session');
var bodyParser = require('body-parser');//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.all('*', function(req, res, next) {
	var nowTimeStamp = new Date().getTime();
	var sessionTimeStamp = (req.session && req.session.timeStamp) || 1;
	if(nowTimeStamp - sessionTimeStamp > 1800000){
		if(req.session){
			req.session.destroy();
		}
	}else{
		if(req.session){
			req.session.timeStamp = new Date().getTime();
		}
	}
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

var content = require('./routes/content'); 
var list = require('./routes/list');
var status = require('./routes/status');
var login = require('./routes/login');
var logout = require('./routes/logout');

app.use('/content', content);
app.use('/list', list);
app.use('/status', status);
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