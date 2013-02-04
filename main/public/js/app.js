requirejs.config({
	baseUrl: '/js/',
	paths: {
		jquery: 		'libs/jquery',
		underscore: 	'libs/underscore',
		backbone: 		'libs/backbone',
		history: 		'libs/history',
		carousel:		'libs/carousel',
		eislideshow:	'libs/jquery.eislideshow',
		flexslider:		'libs/jquery.flexslider',
		ganalytics: 	'modules/ganalytics',
		tweet: 			'libs/jquery.tweet',
		colortip:		'libs/colortip'
	},
    shim: {
        jquery: {
            exports: 'jQuery'
        },
		tweet: {
			deps: 		['jquery']
		},
		colortip: {
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
        	expors:		'_gaq'
        }
    }
});

require(['routers/router', 'jquery', 'tweet'], function(Router, $){

	$(function(){
				
		jQuery(".tweet").tweet({
			join_text: false,
			username: "clubbingowl", // Change username here
			avatar_size: false, // you can active avatar
			count: 2, // number of tweets
			seconds_ago_text: "about %d seconds ago",
			a_minutes_ago_text: "about a minute ago",
			minutes_ago_text: "about %d minutes ago",
			a_hours_ago_text: "about an hour ago",
			hours_ago_text: "about %d hours ago",
			a_day_ago_text: "about a day ago",
			days_ago_text: "about %d days ago",
			view_text: "view tweet on twitter"
		});
				
				
		//and we're off
		new Router();
		
	});
	
});
