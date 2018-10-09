
const yargs=require('yargs');

var geocode=require('./geocode/geocode.js');
var forecast=require('./forecast');

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

geocode.geocodeaddress(argv.a,(errorMessage,result)=>{
	if(errorMessage)
		console.log(errorMessage);
	else{
		console.log(JSON.stringify(result,undefined,2));
		forecast.forecastTemp(result.lattitude,result.longitude,(errorMessage,result)=>{
			if(errorMessage)
				console.log(errorMessage);
			else 
				console.log(JSON.stringify(result.temperature));
		});
	}
});
	
//108281c47a41c7cdd4a61883a5657eb9

//https://api.darksky.net/forecast/108281c47a41c7cdd4a61883a5657eb9/37.8267,-122.4233