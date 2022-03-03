//Routes/api/categories
const express = require('express');
const employee = require('../../models/Employee');
const router = express.Router();

//Load Model 
const Employee = require('../../models/Employee');

//Send Data to MonogoDB 
router.post('/create' , async (req,res) => {
      // console.log(req)
    
        console.log("Send Data Api is Hit")
        console.log(req.body);
        const employee = new Employee({
            name: req.body.name,
            job: req.body.job,
        })

        employee.save(employee)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send("error occurred")
        })

})

router.get('/read' ,(req,res) =>{
    EmployeeModel.find({id : req.body._id})
    .then( data =>{
        res.json(data)
    })
    .catch(err => console.log(err))
})

router.patch('/update' , (req,res)=>{
    EmployeeModel.updateMany({id : req.body._id } , {name : "Arslan"})
    .then(
        data =>{
            res.json(data)
        }
    )
    .catch(err => console.log(err))
})

router.delete('/delete' , (req,res)=>{
    EmployeeModel.remove({id : req.body.id})
    .then( data => {
        res.json(data)
    })
    .catch(err => console.log(err))
})

module.exports = router;