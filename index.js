const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));


var items=["Buy food","Cook Food","Eat Food"];
var workItems=[];

app.get("/", function (req,res) {
	let day = date.getDay();
  res.render("list",{listTitle:day,newListItem:items});
});


app.post("/",function (req,res) {
  item = req.body.newItem; 
  
	if(req.body.button==="Work"){
		workItems.push(item);
		res.redirect("/work");
	}else{
		items.push(item)
		res.redirect("/");
	}
});

app.get("/work",function (req,res) {
	 res.render("list",{listTitle:"Work",newListItem:workItems}) 
});


app.get("/about",function (req,res) {
	 res.render("about"); 
});

app.listen(3000,function () {
	console.log("localhost 3000");
});