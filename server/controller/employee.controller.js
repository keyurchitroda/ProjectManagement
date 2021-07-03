
const employeeModel = require("../model/employee.model")
const jwt = require('jsonwebtoken')

//Get All Data
const Getemployee = async (req,res)=>{
    try{
        let ObjemployeeModel = new employeeModel()
        var dataDetails = await ObjemployeeModel.Getdata()
        console.log(dataDetails)
        res.json(dataDetails)
    }
    catch(e){
        console.log();
    }
}

//Get Single Data
const GeSingletemployee = async (req,res)=>{
    try{
        let ObjemployeeModel = new employeeModel()
        var dataDetails = await ObjemployeeModel.GetSingledata(req.params.empunkid)
        console.log(dataDetails)
        res.json(dataDetails)
    }
    catch(e){
        console.log();
    }
}


//create new employee
const InsertEmployee = async (req,res)=>{
    try{
        let empdata = req.body
        let ObjemployeeModel = new employeeModel()
        var dataDetails = await ObjemployeeModel.AddNewEmployee(empdata)
        console.log(dataDetails)
        res.json(dataDetails)
    }
    catch(e){
        console.log();
    }
}

const EdiEmployee = async (req,res)=>{
    try{
        let empdata = req.body
        let empid = req.params.empunkid
        let ObjemployeeModel = new employeeModel()
        var dataDetails = await ObjemployeeModel.UpdateEmployee(empdata,empid)
        console.log(dataDetails)
        res.json(dataDetails)
    }
    catch(e){
        console.log();
    }
}


const LoginEmployee = async (req,res)=>{
    try{
        let logindata = req.body
        let ObjemployeeModel = new employeeModel()
        var results = await ObjemployeeModel.loginEmployee(logindata)

      //  res.json(results)

        if(results != ""){
			 
            console.log(JSON.stringify(results));
            
            var data = JSON.stringify(results);
            
            var secret = 'TOPSECRETTTTT';
               var now = Math.floor(Date.now() / 1000),
                   iat = (now - 10),
                   expiresIn = 3600,
                   expr = (now + expiresIn),
                   notBefore = (now - 10),
                   jwtId = Math.random().toString(36).substring(7);
               var payload = {
                   iat: iat,
                   jwtid : jwtId,
                   audience : 'TEST',
                   data : data
               };	
               
            
            jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn : expiresIn}, function(err, token) {
                   
               if(err){
                   console.log('Error occurred while generating token');
                   console.log(err);
                   return false;
               }
                else{
               if(token != false){
                   //res.send(token);
                   res.header();
                   res.json({
                         "results":
                                 {"status": "true"},
                         "token" : token,
                       "data" : results
                                       
                     });
                   res.end();
               }
               else{
                   res.send("Could not create token");
                   res.end();
               }
               
                }
           });
       
        }
        else if(results == ""){
            res.json("invalid email or password")
                console.log("not a user");
        }


    }
    catch(e){
        console.log();
    }
}

module.exports = {
    Getemployee,
    InsertEmployee,
    EdiEmployee,
    GeSingletemployee,
    LoginEmployee
}