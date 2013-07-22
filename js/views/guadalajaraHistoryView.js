define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/guadalajaraTemplate.html',
  'i18n!internalization/nls/i18n',
], function($, _, Backbone, GuadalajaraTemplate){//function($, _, Backbone, UsersCollection,CitiesListTemplate,Form)--function($, _, Backbone, ContenidoTemplate)
  var ToledoHistoryView = Backbone.View.extend({
    el: 'body', //<div class='page'></div> definido dentro del <div class='container'> en el index.html
    
    initialize: function()
	  {
		  
	  },
  
	render: function(eventName,options) {
		 console.log('render GuadalajaraTemplate');
		 console.log('CORRECTO en render GuadalajaraHistoryView!!!!!');
	     var compiledTemplate = _.template(GuadalajaraTemplate);
		 this.$el.empty().html(compiledTemplate); //Machaca el html anterior, pero si queremos limpiarlo. Haremos previamente esto EMPTY():
	
		$('.btn_back').click(function(){
			window.App.router.navigate("link1", {trigger: true});
		})
	 },//Cierre 'render'

	});

  return ToledoHistoryView;
});
