exports.getAutonomias = function(req, res){
  //res.send("respond with a resource cars");
  console.log('getAutonomias');
  var json = JSON.stringify({
			    "autonomias": [
	 					{
					        "text": "Castilla-La Mancha"

					    },
					    {
					        "text": "Aragón"
					        
					    }
					]
			});
   res.header("Access-Control-Allow-Origin", "*");
   res.send(json);
};