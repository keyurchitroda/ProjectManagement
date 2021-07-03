var db = require('./db')

class Database {
    constructor() {
        this.conn = db.connect
        this.queryParams = []
    }

    //adding single parameter
    addParam(param) {
        this.queryParams.push(param)
    }

    //adding all parameters at once
    addParams(params) {
        this.queryParams = params;
    }

    //clear parameters
    clearParam() {
        this.queryParams = [];
    }

    //execute query and return result - works for DDL, DML
    async executeQuery(qry) {
        return await this.conn.query(qry, this.queryParams)
    }

    //execute insert query for inserting n number of rows
    async doInsertMultiple(qry) {
        return await this.conn.query(qry, [this.queryParams])
    }

    //execute insert query for inserting n number of rows
    async doInsertSingle(qry) {
        return await this.conn.query(qry, this.queryParams)
    }

}

module.exports = Database