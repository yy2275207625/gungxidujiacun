var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'yunshedujiacun'
});

module.exports = {
    con
}