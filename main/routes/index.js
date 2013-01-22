
/*
 * GET home page.
 */

var os 				= require('os'),
	url 			= require('url'),
	html_minifier 	= require('html-minifier'),
	header 	= '',
	body	= '',
	footer 	= '',
	query;

var complete = function(req, res, code){
		
	if(typeof code === 'undefined' || typeof query.ajaxify !== 'undefined')
		code = 200;
		
	if(typeof query.ajaxify === 'undefined'){
		//normal request...
		
		if(header && body && footer)
			res.send(html_minifier.minify(header + body + footer, {
				collapseWhitespace: true,
				removeComments: 	true
			}), code);
			
	}else{
		//ajaxify request...
		
		res.send(html_minifier.minify(body, {
			collapseWhitespace: true,
			removeComments: 	true
		}), code);
		
	}
}


var global = function(req, res){
	
	query = url.parse(req.url, true).query;
	
	if(typeof query.ajaxify === 'undefined'){
		
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
		
}


exports.index 		= function(req, res){

	global(req, res);
	body = ' - body - ';
	complete(req, res);
	
};

exports.faq 		= function(req, res){	
	global(req, res);
	body = ' - faq - ';
	complete(req, res);
};

exports.about 		= function(req, res){	
	global(req, res);
	body = ' - about - ';
	complete(req, res);
};

exports.blog 		= function(req, res){
	global(req, res);
	body = ' - blog - ';
	complete(req, res);
};

exports.contact 	= function(req, res){
	global(req, res);
	body = ' - contact - ';
	complete(req, res);
};

exports.error		= function(req, res){
	
	global(req, res);
	res.render('view_404', {}, function(err, html){
		body = html;
		complete(req, res, 404);
	});
	
}
