const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root', 
    database: 'DripLandStore'
  })

connection.connect((err)=>{
err ? console.log(err) : console.log(" Mysql database connected succefully ! ");
})

module.exports = connection