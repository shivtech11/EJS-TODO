//creating modules
module.exports.getDate = getDate;

function getDate(){
var today = new Date();
	var options = { 
		weekday: 'long', 
		year: 'numeric',
		 month: 'long', day:
		  'numeric'

		   };

	//console.log(today.toLocaleDateString("en-US", options));
	var date = today.toLocaleDateString("en-US", options);

	return date;

}

module.exports.getDay = getDay;

function getDay(){
var today = new Date();
	var options = { 
		weekday: 'long'
		   };

	//console.log(today.toLocaleDateString("en-US", options));
	var day = today.toLocaleDateString("en-US", options);

	return day;

}

