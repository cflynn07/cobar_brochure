define(['jquery', 'history', 'modules/log', 'modules/ganalytics'], function($, History, log, gaq){
	
	var target = $('div[data-role="main"]');

	var Ajaxify = function(url){
		
		// Check to see if History.js is enabled for our Browser
		if (!History.enabled)
			return false;

		var rootUrl 	= History.getRootUrl();
		var internal 	= url.substring(0, rootUrl.length) === rootUrl || url.indexOf(':') === -1;
		
		if(!internal)
			return false;
		
		if(window.location.pathname == url || window.location.href == url)
			return true;
		
		target.css({
			opacity: 0.3
		});

		// Ajax Request the Traditional Page
		$.ajax({
			url: 		url,
			dataType: 	'html',
			data: {
				ajaxify: true
			},
			success: function(data, textStatus, jqXHR){
								
				target.slideUp('slow', function(){
					
					target.css({
						opacity: 1
					});
					target.html(data);
				
					target.slideDown('slow', function(){
						
						var title = document.title;
						History.pushState({}, title, url);
						
						_gaq.push(['_setAccount', 'UA-36400090-1']);
					//	Backbone.history.loadUrl();
						
					});
					
				});
								
				return true;
				
			},
			error: function(jqXHR, textStatus, errorThrown){
				document.location.href = url;
				return false;
			}
		});	
		
		
		
		
		return true;
	};
	
	// Hook into State Changes
	$(window).bind('statechange',function(){
		
		return;
		
		var
			State 	= History.getState(),
			url 	= State.url;
		
		Ajaxify(url);
		
	});
	
	return Ajaxify;
	
});
