define([
  'jquery',
  'underscore',
  'backbone',
  'models/citiesModel',
  'collections/citiesCollection',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/linkUnoTemplate.html',
  'i18n!internalization/nls/i18n',
], function($, _, Backbone, CitiesModel, CitiesCollection, LinkUnoTemplate){//function($, _, Backbone, UsersCollection,CitiesListTemplate,Form)--function($, _, Backbone, ContenidoTemplate)
  var LinkUnoView = Backbone.View.extend({
    el: 'body', //<div class='page'></div> definido dentro del <div class='container'> en el index.html
    
    initialize: function()
	  {
		  
	  },
  
	render: function(eventName,options) {
		 console.log('render LinkUnoTemplate');
		 console.log('CORRECTO en render LinkUno!!!!!');
		//var compiledTemplate = _.template(CitiesListTemplate,{citiesCollection:citiesCollection.models});
		//this.$el.html('¡CONTENT SHOULD SHOW HERE!'); 
		var citiesCollection = new CitiesCollection();	
		var data = {};
		var that = this;

	

	   citiesCollection.fetch({
    	 success: function(){
		    	 	console.log('CORRECTO ya tengo los SERVICIOS en citiesCollection!!!!!');
					data = citiesCollection.models[0].attributes.capitalsByAutonomies;
       				console.log('data---this.model.models[0].attributes.capitalsByAutonomies-->'+data);
					var compiledTemplate = _.template(LinkUnoTemplate, data);
					that.$el.empty().html(compiledTemplate); //Machaca el html anterior, pero si queremos limpiarlo. Haremos previamente esto EMPTY():
					
					$('.btn_home').click(function(){
						window.App.router.navigate(" ", {trigger: true});
					});

					$("a.external").click(function() {
				      url = $(this).attr("href");
				      window.open(url, '_blank');
				      return false;
				   });

					$(".Toledo").click(function() {
						window.App.router.navigate("toledoHistory", {trigger: true});
				     
				   });

					$(".ciudadReal").click(function() {
				     window.App.router.navigate("ciudadRealHistory", {trigger: true});
				   });

					$(".Cuenca").click(function() {
				     window.App.router.navigate("cuencaHistory", {trigger: true});
				   });

					$(".Albacete").click(function() {
				     window.App.router.navigate("albaceteHistory", {trigger: true});
				   });

					$(".Guadalajara").click(function() {
				     window.App.router.navigate("guadalajaraHistory", {trigger: true});
				   });


					
	    	 } 

	    });



	 	//var compiledTemplate = _.template(LinkUnoTemplate);
		//this.$el.empty().html(compiledTemplate); //Machaca el html anterior, pero si queremos limpiarlo. Haremos previamente esto:

	 },//Cierre 'render'
	});

  return LinkUnoView;
});
