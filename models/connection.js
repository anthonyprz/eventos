var mysql = require("mysql");
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'anthonyprz',
   password: '',
   database: 'connectevents',
   port: 3306
});
module.exports = connection;