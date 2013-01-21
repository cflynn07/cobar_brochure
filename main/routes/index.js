
/*
 * GET home page.
 */

console.log('hello here i am in a module');

var os = require('os');
var header 	= '',
	body	= '',
	footer 	= '';




var complete = function(req, res, code){
	
	if(typeof code === 'undefined')
		code = 200;
	
	if(header && body && footer)
		res.send(header + body + footer, code);
}


var global = function(req, res){
	
	if(!header)
		res.render('view_header', {}, function(err, html){	
			header = html;
			complete();
		});
	
	if(!footer)
		res.render('view_footer', {}, function(err, html){		
			footer = html;
			complete();
		});	
		
}


exports.index 		= function(req, res){
	global(req, res);
	body = ' - ';
	complete(req, res);
};

exports.faq 		= function(req, res){	
	global(req, res);
	body = ' - ';
	complete(req, res);
};

exports.about 		= function(req, res){	
	global(req, res);
	body = ' - ';
	complete(req, res);
};

exports.blog 		= function(req, res){
	global(req, res);
	body = ' - ';
	complete(req, res);
};

exports.contact 	= function(req, res){
	global(req, res);
	body = ' - ';
	complete(req, res);
};

exports.error		= function(req, res){
	global(req, res);
	res.render('view_404', {}, function(err, html){
		body = html;
		complete(req, res, 404);
	});
}
