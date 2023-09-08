import mysql from 'mysql2'
const connection = mysql.createConnection({
  host:'containers-us-west-69.railway.app',
  user: 'root',
  password: 'UhCeItBQA4P06rkoQXgz',
  database: 'railway',
  port: '6977'
})

export default connection
