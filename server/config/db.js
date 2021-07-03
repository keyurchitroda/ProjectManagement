var mysql = require('mysql')
var util = require('util')

var DB = {
	host: "localhost",
	user: "root",
	password: "root" 
}

const connect = mysql.createConnection(DB)
connect.query = util.promisify(connect.query)

connect.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  exports.connect = connect
