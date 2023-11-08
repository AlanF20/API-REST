import mysql from 'mysql2'
const connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'AlanF20',
  database: 'api_rest',
  port: '3306'
})

export default connection