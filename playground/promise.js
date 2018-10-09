
var addSync=(a,b)=>{
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(typeof a==='number' && typeof b==='number')
	{
		resolve(a+b);
	}
	else{
		reject('Arguments must be numbers');
	}
	},1500);
});
};

addSync(5,7).then((res)=>{
	console.log(res);
},(errorMessage)=>{
	console.log(errorMessage);
});




/*var somePromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Hey,its done');
		//reject('unable to connect');
	},2500);
});

somePromise.then((message)=>{
	console.log('success:',message);
},
(errorMessage)=>{
	console.log('error:',errorMessage);
});*/