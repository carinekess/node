var mysql = require("mysql");
const express = require("express");

const app = express();

app.use(express.json());
const courses = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
  { id: 4, name: "user4" },
  { id: 5, name: "user5" },
];

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register",
});

app.use(express.json());

app.post("/user/register", (req, res) => {
  console.log(req.body);
  console.log();
  let userExist = [];
  con.query(
    `SELECT * FROM register where email="${req.body.email}"`,
    function (err, result) {
      if (result.length > 0) {
        return res.json({
          message: "Email exist try different email account",
        });
      } else {
        var sql = `INSERT INTO register (id, first_name, larst_name, email, phone, selecte, city, provence, password, confirm) VALUES (NULL,'${req.body.first_name}','${req.body.last_name}','${req.body.email}','${req.body.phone}','${req.body.selecte}','${req.body.city}','${req.body.provence}','${req.body.password}','${req.body.confirm}')`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          return res.json({
            message: "Signup success",
          });
        });
      }
    }
  );
});
app.post("/user/login", (req, res) => {
    console.log(req.body);
    console.log();
    let userExist = [];
    con.query(
      `SELECT email,password FROM register where email="${req.body.email}" AND password="${req.body.password}"`,
      function (err, result) {
        console.log(result);
        if (result== 0) {
          return res.json({
            message: "invalide email or password",
          });
        } else {
            return res.json({
                message: "login succefully"
            })
        }
    });
});

app.get("/user/view/:id", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      `SELECT * FROM register where id =${req.params.id}`,
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);

        res.json(result);
      }
    );
  });
});
app.get("/user/view", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query(
     sql= "SELECT * FROM register ", function (err, result, fields) {
        if (err) throw err;
        console.log(result);

        res.json(result);
      }
    );
  });
});

app.delete("/register/:id", (req, res) => {
  console.log(req.params);
  con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM register WHERE id = 2";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
});
app.put("/update/:id", (req, res) => {
  //
  con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE register SET city = 'muhanga' WHERE id = 3";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
});
app.post;
app.listen(5050);
