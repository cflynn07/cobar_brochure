define(['backbone', 'jquery', 'modules/log', 'modules/ajaxify'], function(Backbone, $, log, Ajaxify){
	

	var Wrapper = Backbone.View.extend({
		el: 'div#wrap',
		initialize: function(){

		},
		events: {
			'click a:not(.no-ajaxify)': 'click_ajaxify',
			'click ul#nav li a': 		'click_nav'
		},
		click_nav: function(e){
			
			console.log('click nav');
			
			$('ul#nav li a').removeClass('active');
			var a = $(e.currentTarget);
			a.addClass('active');
			
		},
		click_ajaxify: function(e){

			var url = $(e.currentTarget).attr('href');

			if(Ajaxify(url)){
				e.preventDefault();
				return false;
			}
				
			return true;
		}
	});
	
	return Wrapper;
});