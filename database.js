const e = require('express');
var mysql = require('mysql');
import { name,email,mb } from './server.js';

var con = mysql.createConnection({
  host: "localhost",
  post : 3306,
  user: "root",
  password: "123456789",
  database: "project_batch"
});
// let name ;
// let email;
// let mb;
// let date;
function senddata( name1 ,email1 ,  mb1 , date1)
{
    name = name1;
    email = email1;
    mb = mb1;
    date = date1;
}
let sql = `INSERT INTO ad(Name,Email,mb)VALUES(name,email,mb)`;

con.connect(function(err) 
{
  if 
    (err) console.log(err);
  else
    console.log("Connected!");

    con.query(sql,function (err, result){
        if(err) 
          console.log(err)
        else
          console.log("Inserted Succeffully");
    })
    

})