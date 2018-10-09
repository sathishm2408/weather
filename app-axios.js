
const yargs=require('yargs');
const axios=require('axios');


const argv=yargs
	.options({
		a:{
		demand:true,
		alias:'address',
		description:'Enter the address',
		string:true
	}
	})
	.help()
	.alias('help','h')
	.argv;

	
var address=encodeURIComponent(argv.address);
var ad='https://maps.googleapis.com/maps/api/geocode/json?address='+address;

axios.get(ad).then((response)=>{
	if(response.data.status==="ZERO_RESULTS")
		{
			throw new Error("address not found");
		}
	
			var lat=response.data.results[0].geometry.location.lat;
			var lng=response.data.results[0].geometry.location.lng;		
			
			var temp='https://api.darksky.net/forecast/108281c47a41c7cdd4a61883a5657eb9/'+lat+','+lng;
			console.log(response.data.results[0].formatted_address);
			
			return axios.get(temp)
			}).then((response)=>{
				var temperature=response.data.currently.temperature;
				console.log(temperature);
			}).catch((e)=>{
				if(e.code==='ENOTFOUND'){
					console.log('unable to connect to API servers');
				}else{
					console.log(e.message);
				}
			});
	
//108281c47a41c7cdd4a61883a5657eb9

//https://api.darksky.net/forecast/108281c47a41c7cdd4a61883a5657eb9/37.8267,-122.4233