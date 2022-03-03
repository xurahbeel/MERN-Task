
const express = require ("express");
var bodyParser = require('body-parser');


const app = express();
const config = require('config')
//DB Connection 
const connectDB = require('./config/db'); 
//Connect Database
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}))

//routes

const employee = require('./Routes/api/employee')
app.use('/api', employee);



app.listen ( 5000  , () =>{
    console.log("Server is listening 5000");
});