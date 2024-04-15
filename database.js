var mysql = require('mysql');

const express   = require("express")

const app =  express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"carina"
});




app.get("/accounts"   ,   (req,res)=>{

    con.connect(function(err) {
        if (err) throw err;
        //Select all customers and return the result object:
        con.query("SELECT * FROM account", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.json(result)
        });
      });
})
app


app.post
app.listen(5000);


async function main() {
  const newUser =await prisma.users.create({
      date:{
          first_name:"carine",
          last_name:"utuje",
          email:"abiturije.com",
          phone: "carine",
          campany:"echinika",
          city:"kigali",
          province:"kigali",
          country:"rwanda",
          password:"1234567",
          confirm:"1234567"
      }
  });
  console.log("new user created:",newUser)
}
main()
.cath(e =>{
throw e;
})
.finally(async() =>{
  await prisma.$disconnect();
});