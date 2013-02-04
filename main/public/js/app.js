requirejs.config({
	baseUrl: '/js/',
	paths: {
		jquery: 	'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 	'libs/backbone',
		history: 	'libs/history'
	},
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        backbone: {
        	deps: 		['underscore', 'jquery'],
        	exports: 	'Backbone'
        },
        history: {
        	deps: 		['jquery'],
        	exports: 	'History'
        }
    }
});

require(['routers/router'], function(Router){

	
	//and we're off
	new Router({
		pushState: 	true,
		hashChange: false
	});
	
	
});
