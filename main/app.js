
/**
 * Module dependencies.
 */

var express = require('express')
  , routes 	= require('./routes')
  , user 	= require('./routes/user')
  , http 	= require('http')
  , path 	= require('path');

var app = express();

app.configure(function(){

	//rather not telegraph what we're usingg
	app.use(function (req, res, next) {
        res.removeHeader("X-Powered-By");
        next();
    }); 
	
	
	if(process.env.NODE_ENV == 'production'){
		app.set('port', 8080);
	}else{
		app.set('port', 8080);
	}
	
  //app.set('port', process.env.PORT || 8080);
  
  
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
 
 
  
  
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


//the four pages

app.get('/', 			routes.index);
app.get('/services', 	routes.services);
app.get('/about', 		routes.about);
app.get('/blog', 		routes.blog);
app.get('/contact', 	routes.contact);
app.get('*', 			routes.error);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
