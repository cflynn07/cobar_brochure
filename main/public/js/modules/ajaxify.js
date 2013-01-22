define(['jquery', 'history', 'modules/log'], function($, History, log){
	
	var target = $('div[data-role="main"]');

	var Ajaxify = function(url){
		
		// Check to see if History.js is enabled for our Browser
		if (!History.enabled)
			return false;

		var rootUrl 	= History.getRootUrl();
		var internal 	= url.substring(0, rootUrl.length) === rootUrl || url.indexOf(':') === -1;
		
		if(!internal)
			return false;
			
		var title = document.title;
		History.pushState({}, title, url);
		
		return true;
	};
	
	// Hook into State Changes
	$(window).bind('statechange',function(){
														
		// Prepare Variables
		var
			State 	= History.getState(),
			url 	= State.url;
					
		// Ajax Request the Traditional Page
		$.ajax({
			url: 		url,
			dataType: 	'html',
			data: {
				ajaxify: true
			},
			success: function(data, textStatus, jqXHR){
								
				target.slideUp('slow', function(){
					
					target.html(data);
					target.slideDown('slow', function(){
						
					});
					
				});
				
				Backbone.history.loadUrl();
				return true;
				
			},
			error: function(jqXHR, textStatus, errorThrown){
				document.location.href = url;
				return false;
			}
		});	
					
	});
	
	
	return Ajaxify;
	
});
