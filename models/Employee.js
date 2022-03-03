const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name : {
        type : String ,
        // lowercase : true 
    },
    job :{
        type : String , 
        // required : true, 
    },
    department : {
        type : String ,
        // require : true
    },
    salary :{
        type : String ,
        // required : true
    },
    hire_date : {
        type : Date ,
        // required :true
    }
})

const employee = mongoose.model('employee' , employeeSchema)
module.exports = employee