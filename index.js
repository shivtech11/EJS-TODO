const express = require("express");


const app = express();



app.get("/", function (req,res) {
	
	var today = new Date();
	var currentDay = today.getDay();

	if(currentDay ===6 || currentDay === 0){
		res.sendFile(__dirname+"/weakend.html");
	}else{
		res.sendFile(__dirname+"/weakday.html")
	}
});

app.listen(3000,function (req,res) {
	console.log("localhost 3000");
});