var mysql = require('mysql');
const express   = require("express")

const app =  express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register"
});
app.post("/user"   ,   (req,res)=>{
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id int primary keyauto_in,email VARCHAR(255),password VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
})
});




app.post
app.listen(6060);