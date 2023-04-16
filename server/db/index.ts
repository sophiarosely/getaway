const mysql = require('mysql');

const dbconnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'getaway'
});

dbconnection.connect((err:any) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database!');
});


module.exports = dbconnection