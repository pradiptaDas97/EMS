var express =require("express");
const app =express();
var mongoose =require("mongoose");
var cors = require("cors");
var bodyParser  =require("body-parser");
var dbconfig= require("./database/db");
var path = require("path");
var createError = require('http-errors')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.db,{
    useNewUrlParser : true
}).then(()=>{
    console.log("Databse Sucessfully connected")
},
error=>{
    console.log("Database Couldnot connects:"+error)
})
app.use(cors());

const port = 4000;
const server = app.listen(port,()=>{
    console.log('connected to port'+port)
})
const employeeRoute = require('../backend/routes/employee.route')
app.use('/', employeeRoute)

app.use((req,res,next)=>{
    next(createError(404));
});

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode=500;
    res.status(err.statusCode).send(err.message);
})