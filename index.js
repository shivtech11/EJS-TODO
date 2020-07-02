const express = require("express");


const app = express();

// setting the ejs engine for handling ejs tempelatesa
app.set('view engine','ejs');

app.get("/", function (req,res) {
	
	var today = new Date();
	var currentDay = today.getDay();
	var day=""

	if(currentDay ===6 || currentDay === 0){
		day="weakend";
	}else{
		day="weakday";
	}

//sending the data to the ejs file
	res.render("list",{kindOfDay:day});
});

app.listen(3000,function () {
	console.log("localhost 3000");
});