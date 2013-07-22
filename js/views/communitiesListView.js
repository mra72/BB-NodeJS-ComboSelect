define([
  'jquery',
  'underscore',
  'backbone',
  'collections/communitiesCollection',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/communitiesListTemplate.html',
  'i18n!internalization/nls/i18n',
], function($, _, Backbone,CommunitiesCollection, CommunitiesListTemplate){//function($, _, Backbone, UsersCollection,CitiesListTemplate,Form)--function($, _, Backbone, ContenidoTemplate)
  var CommunitiesListView = Backbone.View.extend({
    el: 'body', //<div class='page'></div> definido dentro del <div class='container'> en el index.html
    
    initialize: function()
	  {
		  
	  },
  
	render: function(eventName,options) {
		 console.log('render citiesListView'); 
		 var that = this;	
	     var communitiesCollection = new CommunitiesCollection();	
	      /*
	       FETCH:
			Este método se encarga de traer el conjunto de MODELOS del SERVIDOR y cargarlos en la COLECCIÓN, reseteándola. El server debe de 
			encargarse de devolver la colección de los modelos en formato JSON, si estás trabajando sobre una API del servidor antigüa y no 
			puedes generar dicha respuesta, te interesará sobreescribir el método 'parse'.
	       */
	      communitiesCollection.fetch({
	    	 success: function(collection, response){// En el response recibiremos el JSON de palo, que hemos preparado
	    	 										//para poder practicar. En practicas siguientes ya nos adentraremos en
	    	 										//el tema de conectar BBDD, con backbone y node.

		    	 	console.log('CORRECTO ya tengo los SERVICIOS response!!!!!---->'+response.autonomias);
		    		//var compiledTemplate = _.template(CitiesListTemplate,{citiesCollection:citiesCollection.models});
		    		//that.$el.html('¡CONTENT SHOULD SHOW HERE!'); 
	    		 	var compiledTemplate = _.template(CommunitiesListTemplate);
	    			that.$el.html(compiledTemplate); 

	    		 	
					var objJson = response; 	
					//Llenamos el combo despues de recibir el Json con la informacion necesaria para ello.
					$("#comboCommunities").append('<option value=""></option>');
					$.each(objJson.autonomias, function(i,obj){
							$("#comboCommunities").append('<option value="' + obj.text + '">' + obj.text+ '</option>');
					});



					//Control del CHANGE en el Select(combo)
					$("#comboCommunities").change(function(){
						var value_Autonomia = $(this).val();
				    	switch(value_Autonomia)
						{
						case 'Castilla-La Mancha':
						  	console.log('PERFECTO!!!!!');
				    		window.App.router.navigate("link1", {trigger: true});
						  break;
						case 'Aragón':
						  	alert('Seleccionaste comunidad de ARAGÓN!!!!!');
			    		  break;
						default:
						  
						}
			    })
					
	    	 } 

	    });

	   
	   
	 },//Cierre 'render'



	events:{
    	'#comboCities':'clickSelectCities' // Esto se traduce que al hacer click en combo
    											//se lleva a cabo las acciones descritas en el método 'clickSelectCities'.
    },
    clickSelectCities:function(ev){
    	console.log('click');
    	//var userDetails = $(ev.currentTarget).serializeObject();
    	
    	
//    	var userModel = new UserModel();
     	//userModel.save(userDetails,{
//    		success: function(userModel){
//    			alert(userModel);
   		//}
    // });
    	return false;
    }
	});
  // Our module now returns our view

 
  return CommunitiesListView;
});

