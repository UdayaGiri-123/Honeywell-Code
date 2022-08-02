const express = require("express");
const date = require(__dirname+"/date.js");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const mongoose= require("mongoose");
const app = new express();
mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true});
app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));

const UserSchema=new mongoose.Schema({
    username:'string',
    password:'string'
})

const movieticketschma = new mongoose.Schema({
    Name:'String',
    Seats :[]
})

const Movie = new mongoose.model('movie',movieticketschma);

const User=new mongoose.model('task',UserSchema);
const movie1 = new Movie({
    Name :"Spider Man",
    Seats :[1,2,3,4,5]
}
)

const movie2 = new Movie({
    Name :"Bat Man",
    Seats :[1,2,3,4,5]
}
)
const defmovies=[movie1,movie2];

app.get("/",function(req,res){
    const Date=date();
res.render("login",{ KindofDay :Date});
 
})

app.post("/",function(req,res){
const username=req.body.enteredtask;
const password=req.body.password;
const newuser= new User({username:username,password:password});
newuser.save();
res.redirect("movie");
})

app.get("/movie",function(req,res){
res.render("movie",{avmovies:defmovies});
})

 app.post("/checked",function(req,res){
    const index = "movie"+ req.body.li;
    res.render("/movie/"+index);
 
 })

 app.get("/movie/index" , function(){
    
 })


app.listen(3000,function(res,req){
    console.log("Server port 3000 is up & running");
})