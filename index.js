//importing modules in our file
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// setting the ejs engine for handling ejs tempelatesa
app.set('view engine','ejs');

//using body-parser in our app
app.use(bodyParser.urlencoded({extended:true}))

//adding css or js like static files from public folder
app.use(express.static("public"));


//declaring global variable
//var item="" it is useless,so array make
var items=["Buy food","Cook Food","Eat Food"];

app.get("/", function (req,res) {
	
	var today = new Date();
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	//console.log(today.toLocaleDateString("en-US", options));
	var day = today.toLocaleDateString("en-US", options);


//sending the data to the ejs file
	//res.render("list",{kindOfDay:day});
//now above line code is changing bcz newListItem also wants to send 
  res.render("list",{kindOfDay:day,newListItem:items})  //now it shows item not defined bcz it's in post method hence we will change it's scope

});


app.post("/",function (req,res) {

  //var item = req.body.newItem;    ==>shows error bcz of scope
  item = req.body.newItem; 

  //add this below code at the end of the programing for finishing the list of items an array
  items.push(item)

//send new list items to the list.ejs  but it shows error bcz it does no send the data or 
//newListItem bcs kindOfday is sending using get method,
// res.render("list",{newListItem:item});
//show that we will use redirect;
res.redirect("/");
})

app.listen(3000,function () {
	console.log("localhost 3000");
});