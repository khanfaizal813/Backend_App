const Employee = require('../models/employee');


// cretae employee
const createEmploye = (req, res, next ) => {
    let employee = new Employee({
        name: req.body.name,
        designation:  req.body.designation,
        email:  req.body.email,
        phone:  req.body.phone,
        age:  req.body.age
    })
    employee.save().then( (response) => {
     res.json({
         response
     })
 
    }).catch((err) => {
     res.json({
         message: 'An Error Occured'
     })
    })
 }
 

// show all employees
const employeeList = (req, res, next ) => {
   Employee.find().then( (response) => {
    res.json({
        response
    })

   }).catch((err) => {
    res.json({
        message: 'An Error Occured'
    })
   })
}

// Find employee by ID
const getEmployeeById = (req, res, next ) => {
    const employeeId = req.params.employeeId
    Employee.findById(employeeId).then( (response) => {
     res.json({
         response
     })
 
    }).catch((err) => {
     res.send(err)
    })
 }

 // update employee By ID
 const updateEmployeeById = (req, res, next ) => {
    const employeeId = req.params.employeeId
    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeId, {$set: updatedData}).then( (response) => {
     res.json({
         response
     })
 
    }).catch((err) => {
     res.json({
         message: 'An Error Occured'
     })
    })
 }

 // delete employee by ID
 const deleteEmployeeById = (req, res, next ) => {
    const employeeId = req.params.employeeId
    Employee.findByIdAndDelete(employeeId).then( (response) => {
     res.json({
         response
     })
 
    }).catch((err) => {
     res.json({
         message: 'An Error Occured'
     })
    })
 }

 module.exports = {
    createEmploye, employeeList,
     getEmployeeById, updateEmployeeById,
     deleteEmployeeById
 }