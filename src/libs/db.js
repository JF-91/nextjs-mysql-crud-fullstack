import mysql from "mysql2";

export const conn = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "secret",
  port: 3306,
  database: "nextMysql",
}).promise();
