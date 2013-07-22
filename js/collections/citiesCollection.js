define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/citiesModel'
], function(_, Backbone, CitiesModel){
	 
  var CitiesCollection = Backbone.Collection.extend({
	  
      model: CitiesModel,
      initialize : function(models, options) {

      },
   
      url: 'http://localhost:3000/capitalxcommunity',//Llamamos al servicio que nos devolvera la coleccion de CIUDADES para rellenar el combo.
      
  });
  // You don't usually return a collection instantiated
  return CitiesCollection;
});