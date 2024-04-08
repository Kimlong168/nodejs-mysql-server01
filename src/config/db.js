const mysql = require("mysql");

const db = mysql.createConnection({
  host: "ryfqldzbliwmq6g5.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  user: "qb0v1bouxqsbmr47",
  password: "azg5ycjsr4lppiwl",
  database: "dklq1ynshnscfwzt",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

module.exports = db;

