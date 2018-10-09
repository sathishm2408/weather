const request=require('request');

var forecastTemp=(lat,lng,callback)=>{
	var temp='https://api.darksky.net/forecast/108281c47a41c7cdd4a61883a5657eb9/'+lat+','+lng;
request({
	/*url:'https://api.darksky.net/forecast/108281c47a41c7cdd4a61883a5657eb9/37.8267,-122.4233',*/
	url:temp,
	json:true
	},
	(error,response,body)=>{
		if(error)
		{
			/*console.log('unable to connect to forecast.io');*/
			callback('unable to connect to forecast.io');
		}else if(!error && response.statusCode===200){
			/*console.log(body);*/
		/*console.log(body.currently.temperature);*/
		callback(undefined,{
			temperature:body.currently.temperature
		});
		}else
			/*console.log('unable to fetch weather');*/
			callback('unable to fetch weather');
		
	});
};
module.exports.forecastTemp=forecastTemp;