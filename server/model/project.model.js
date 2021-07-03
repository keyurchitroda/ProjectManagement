const dao = require("../config/dao")

class projectModel {
    constructor() {
        console.log("employee Dao Loaded")
        this.dao = new dao()
        this.db = "ibl_db"
    }

    //Get All POS data
    async Getdata() {
        try {
            var sql = `SELECT * FROM ${this.db}.project_tbl inner join ${this.db}.employee_tbl on ${this.db}.project_tbl.empid = ${this.db}.employee_tbl.empunkid`;
            let projData = await this.dao.executeQuery(sql);
            return projData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }

      //Get All POS data
      async GetSingleProject(projid) {
        try {
            var sql = `SELECT * FROM ${this.db}.project_tbl where projectunkid = ?`;
            this.dao.addParam(projid)
            let projData = await this.dao.executeQuery(sql);
            return projData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }

    async AddNewProject(params) {
        try {
            console.log(params);
            var sql = `INSERT INTO ${this.db}.project_tbl SET ?`;
            this.dao.addParam(params)
            let projData = await this.dao.executeQuery(sql);
            return projData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }
    async UpdateProject(params,projid) {
        try {
            console.log(params);
            var sql = `UPDATE ${this.db}.project_tbl SET title = ?, description=?, company_name=?, required_time_in_months=?, project_cost=? where projectunkid = ? `;
            this.dao.addParam(params.title)
            this.dao.addParam(params.description)
            this.dao.addParam(params.company_name)
            this.dao.addParam(params.required_time_in_months)
            this.dao.addParam(params.project_cost)
            this.dao.addParam(projid)
            let projData = await this.dao.executeQuery(sql);
            return projData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }    

}

module.exports = projectModel



