const dao = require("../config/dao")

class logintModel {
    constructor() {
        console.log("employee Dao Loaded")
        this.dao = new dao()
        this.db = "ibl_db"
    }

    //Get All POS data
    async login() {
        try {
            var sql = `SELECT * FROM ${this.db}.employee_tbl where email = ? and password = ?`;
            let projData = await this.dao.executeQuery(sql);
            console.log(projData);
            return projData
        }
        catch (e) {
            console.log(e)
            return false
        }
    }
}
    
    module.exports = projectModel
