define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/toledoTemplate.html',
  'i18n!internalization/nls/i18n',
], function($, _, Backbone, ToledoTemplate){//function($, _, Backbone, UsersCollection,CitiesListTemplate,Form)--function($, _, Backbone, ContenidoTemplate)
  var ToledoHistoryView = Backbone.View.extend({
    el: 'body', //<div class='page'></div> definido dentro del <div class='container'> en el index.html
    
    initialize: function()
	  {
		  
	  },
  
	render: function(eventName,options) {
		 console.log('render ToledoTemplate');
		 console.log('CORRECTO en render ToledoHistoryView!!!!!');
	     var compiledTemplate = _.template(ToledoTemplate);
		 this.$el.empty().html(compiledTemplate); //Machaca el html anterior, pero si queremos limpiarlo. Haremos previamente esto EMPTY():
	
		$('.btn_back').click(function(){
			window.App.router.navigate("link1", {trigger: true});
		})
	 },//Cierre 'render'

	});

  return ToledoHistoryView;
});
