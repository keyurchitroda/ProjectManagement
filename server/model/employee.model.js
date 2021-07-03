const dao = require("../config/dao")

class employeeModel {
    constructor() {
        console.log("employee Dao Loaded")
        this.dao = new dao()
        this.db = "ibl_db"
    }

    //Get All POS data
    async Getdata() {
        try {
            var sql = `SELECT * FROM ${this.db}.employee_tbl`;
            let empData = await this.dao.executeQuery(sql);
            return empData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }

      //Get All POS data
      async GetSingledata(empid) {
        try {
            var sql = `SELECT * FROM ${this.db}.employee_tbl where empunkid = ?`;
            this.dao.addParam(empid)
            let empData = await this.dao.executeQuery(sql);
            return empData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }

    async AddNewEmployee(params) {
        try {
            console.log(params);
            var sql = `INSERT INTO ${this.db}.employee_tbl SET ?`;
            this.dao.addParam(params)
            let empData = await this.dao.executeQuery(sql);
            return empData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }
    async UpdateEmployee(params,empid) {
        try {
            console.log(params);
            var sql = `UPDATE ${this.db}.employee_tbl SET name = ?, contact_number=?, email=?, technology=?, password=? where empunkid = ? `;
            this.dao.addParam(params.name)
            this.dao.addParam(params.contact_number)
            this.dao.addParam(params.email)
            this.dao.addParam(params.technology)
            this.dao.addParam(params.password)
                this.dao.addParam(empid)
            let empData = await this.dao.executeQuery(sql);
            return empData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }    

    async loginEmployee(params) {
        try {
            console.log(params);
            var sql = `SELECT * FROM ${this.db}.employee_tbl where email = ? AND password = ?`;
            this.dao.addParam(params.email)
            this.dao.addParam(params.password)
            let empData = await this.dao.executeQuery(sql);
            return empData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }

}

module.exports = employeeModel



