
const projectModel = require("../model/project.model")

//Get All Data
const GetProject = async (req,res)=>{
    try{
        let ObjprojectModel = new projectModel()
        var dataDetails = await ObjprojectModel.Getdata()
        console.log(dataDetails)
        res.json(dataDetails)
    }
    catch(e){
        console.log();
    }
}

//Get Single Data
const GeSingletproject = async (req,res)=>{
    try{
        let ObjprojectModel = new projectModel()
        var dataDetails = await ObjprojectModel.GetSingleProject(req.params.projectunkid)
        console.log(dataDetails)
        res.json(dataDetails)
    }
    catch(e){
        console.log(e);
    }
}


//create new employee
const InsertProject = async (req,res)=>{
    try{
        let projdata = req.body
        let ObjprojectModel = new projectModel()
        var dataDetails = await ObjprojectModel.AddNewProject(projdata)
        console.log(dataDetails)
        res.json(dataDetails)
    }
    catch(e){
        console.log();
    }
}

const EditProject = async (req,res)=>{
    try{
        let projdata = req.body
        let projectid = req.params.projectunkid
        let ObjprojectModel = new projectModel()
        var dataDetails = await ObjprojectModel.UpdateProject(projdata,projectid)
        console.log(dataDetails)
        res.json(dataDetails)
    }
    catch(e){
        console.log();
    }
}

module.exports = {
    GetProject,
    InsertProject,
    EditProject,
    GeSingletproject
}