const express = require('express');
const employeeController = require('../controller/employee.controller');

const router = express.Router();

router.post('/empimport',  employeeController.InsertEmployee);

router.get('/import',  employeeController.Getemployee);

router.post('/editimport/:empunkid',  employeeController.EdiEmployee);

router.get('/import/:empunkid',  employeeController.GeSingletemployee);

router.post('/login',  employeeController.LoginEmployee);


module.exports = router;

