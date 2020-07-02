const express = require("express");


const app = express();

// setting the ejs engine for handling ejs tempelatesa
app.set('view engine','ejs');

app.get("/", function (req,res) {
	
	var today = new Date();
	var currentDay = today.getDay();
	var day=""

	switch(currentDay){
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
				console.error("Error: current day is equal to "+currentDay);

	}

console.log(day);
//sending the data to the ejs file
	res.render("list",{kindOfDay:day});


});

app.listen(3000,function () {
	console.log("localhost 3000");
});