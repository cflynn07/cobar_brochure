define(['backbone', 'jquery', 'modules/log', 'views/wrapper'], function(Backbone, $, log, Wrapper){
	
	new Wrapper();
	
	var Router = Backbone.Router.extend({
		initialize: function(){
			Backbone.history.start();
		},
		routes: {
			'': 'index'
		},
		index: function(){
			
			console.log('Router --> index()');
			
		}
	});
	
	return Router;
	
});