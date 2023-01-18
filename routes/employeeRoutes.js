const express = require('express');
const employeeRouter = express.Router()
const EmployeeController = require('../controllers/employeeController')


employeeRouter.get('/', EmployeeController.employeeList)
employeeRouter.get('/:employeeId', EmployeeController.getEmployeeById)

employeeRouter.post('/createEmployee', EmployeeController.createEmploye)
employeeRouter.put('/updateEmployee/:employeeId', EmployeeController.updateEmployeeById)
employeeRouter.delete('/deleteEmployee/:employeeId', EmployeeController.deleteEmployeeById)
  
module.exports = employeeRouter

