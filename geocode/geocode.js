const request=require('request');


var geocodeaddress=(loc,callback)=>{

var address=encodeURIComponent(loc);
/*console.log(argv);
console.log(argv.a);
console.log(address);*/
var ad='https://maps.googleapis.com/maps/api/geocode/json?address='+address;
request({
	/*url:'https://maps.googleapis.com/maps/api/geocode/json?address={{address}}',*/
	url:ad,
	json:true
	},(error,response,body)=>{
		if(error)
		{
			/*console.log("Unable to connect to google");*/
			callback("Unable to connect to google");
		}
		else if(body.status==="ZERO_RESULTS")
		{
			/*console.log("address not found")*/
			callback("address not found");
		}else if(body.status==="OK"){
		callback(undefined,{
			address:body.results[0].formatted_address,
			lattitude:body.results[0].geometry.location.lat,
			longitude:body.results[0].geometry.location.lng
		});
		
		/*console.log(body.results[0].formatted_address);
		console.log(body.results[0].geometry.location.lat);
		console.log(body.results[0].geometry.location.lng);*/
		/*console.log(body);*/
		}
	});
};
module.exports={
geocodeaddress
};