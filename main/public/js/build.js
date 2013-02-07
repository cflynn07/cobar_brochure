({
	wrap:	true,
	baseUrl: ".",
	paths: {
		jquery: 		'libs/jquery',
		underscore: 	'libs/underscore',
		backbone: 		'libs/backbone',
		history: 		'libs/history',
		carousel:		'libs/carousel',
		eislideshow:	'libs/jquery.eislideshow',
		flexslider:		'libs/jquery.flexslider',
		ganalytics: 	'modules/ganalytics',
		almond: 		'libs/almond',
		tweet: 			'libs/jquery.tweet'
	},
	name: 		"./libs/almond",
	include:	 "app",
	out: 		"app-built.js",
	shim: {
        jquery: {
            exports: 'jQuery'
        },
        tweet: {
			deps: 		['jquery']
		},
        backbone: {
        	deps: 		['underscore', 'jquery'],
        	exports: 	'Backbone'
        },
        history: {
        	deps: 		['jquery'],
        	exports: 	'History'
        },
        carousel: {
        	deps: 		['jquery'],
        	exports: 	'carousel'
        },
        eislideshow: {
        	deps:		['jquery'],
        	exports:	'eislideshow'
        },
        flexslider: {
        	deps:		['jquery'],
        	exports:	'flexslider'
        },
        ganalytics: {
        	exports:	'_gaq'
        },
    }
})
