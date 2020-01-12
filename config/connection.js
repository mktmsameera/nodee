var mysql = require('mysql')
var db;
var setting = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node'
};

function connectDatabase() {
    if(!db){
        db=mysql.createConnection(setting);

        db.connect(function (err){
            if(!err){
                console.log("Database connection");
            }else{
                console.log("error database");
            }
        });
    }
    return db;
}

module.exports = connectDatabase();

//connection.connect()
