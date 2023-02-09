const express = require('express')
const app = express()
app.use(express.json());

const bodyParser = require('body-parser');
const { emit } = require('nodemon');
app.use(bodyParser.urlencoded({extended : false}))

//const e = require('express');
var mysql = require('mysql');
const e = require('express');


var con = mysql.createConnection({
  host: "localhost",
  post : 3306,
  user: "root",
  password: "123456789",
  database: "project_batch"
});


app.use(express.static('Regirstation_system'))
app.use('/css',express.static(__dirname+'Regirstation_system/css'))
app.use('/images',express.static(__dirname+'Regirstation_system/images'))
app.use('/js',express.static(__dirname+'Regirstation_system/js'))

app.set('view engine','html')
app.get('/',(req,res)=> {
    // res.use(__dirname+'/Regirstation_system/index.html','utf8');
    // res.sendFile(__dirname+'/Regirstation_system/css/style.css');
    app.render('/Regirstation_system/index')
});

app.post('/create_contact',(req,res)=>{
    console.log("Data Successfully sent from html to server");
    var name = req.body.name1;
    var email = req.body.email;
    var mb = req.body.mb;
    var date = req.body.date;
    var cnam = req.body.course;

    
   senddata(name,email,mb,date,cnam);
   res.sendFile(__dirname+'/Regirstation_system/thank.html','utf8');
  //  app.render('/Regirstation_system/thank');
    
    

    //console.log(req.body.name1);
})

const port = 3000
app.listen(port,start)

function start()
{
    console.log("This app is listening on port 3000")
}


var  name2 
var email2
var mb2 
var date2
var cnam2
function senddata( name1 ,email1 ,  mb1 , date1,cnam)
{
    name2 = name1;
    email2 = email1;
    mb2= mb1;
    date2 = date1;
    cnam2 = cnam
   let sql ;
    if(cnam == "ad")
    {
      sql = "INSERT INTO ad (Name,Email,mb )VALUES ?";
      var values = [  
          [name2,email2,mb2]]  
      
    }
    else if(cnam == "fed")
    {
      sql = "INSERT INTO fed (Name,Email,mb )VALUES ?";
      var values = [  
          [name2,email2,mb2]]  
      
    }
    else if(cnam == "fsd")
    {
      sql = "INSERT INTO fsd (Name,Email,mb )VALUES ?";
      var values = [  
          [name2,email2,mb2]]  
      
    }
    else if(cnam == "dsa")
    {
      sql = "INSERT INTO dsa (Name,Email,mb )VALUES ?";
      var values = [  
          [name2,email2,mb2]]  
      
    }
    else if(cnam == "pb")
    {
      sql = "INSERT INTO pb (Name,Email,mb )VALUES ?";
      var values = [  
          [name2,email2,mb2]]  
      
    }
    

    con.connect(function(err) {
        if 
          (err) 
          console.log(err);
        else
          console.log("Connected!");
      
          con.query(sql,[values],function (err, result){
              if(err) 
                console.log(err)
              else
                console.log("Inserted Succeffully");
          })
          
      
      })
      //con.destroy();
     

}


