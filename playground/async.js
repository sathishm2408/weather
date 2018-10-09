console.log("start");

setTimeout(()=>{
console.log("waiting");
},2000);


setTimeout(()=>{
console.log("waiting2");
},0);

console.log("finish");