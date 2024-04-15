var mysql = require('mysql');
const express   = require("express")

const app =  express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register"
});
app.post("/register"   ,   (req,res)=>{
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE register (id int primary key,first_name VARCHAR(255),larst_name VARCHAR(255),email VARCHAR(255),phone VARCHAR(255),selecte VARCHAR(255),city VARCHAR(255),provence VARCHAR(255),password VARCHAR(255),confirm VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
})
}); 
app.post
app.listen(5050);