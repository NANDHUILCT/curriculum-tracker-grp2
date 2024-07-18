// const express = require("express");
// const TrackData = require("./src/model/TrackData");


// const app = express();
// const cors = require('cors');
// const bodyParser = require("body-parser");
// app.use(cors());

// app.get('/',function(req,res){
// res.send("API response correctly")

// })

// // app.get('/requirements',function(req,res){
// //     res.header("Acces-Control-Allow-Origin","*");
// //     res.header('Acces-Control-Allow-Methods:GET,POST,PUT,DELETE');
// //     TrackData.find().then(function(Tracker){
// //        res.send(requirements);


// //     })
// // })

// // app.post('/insert',bodyParser.json(),function(req,res){
// //     res.header("Access-Control-Allow-Orgin","*");
// //     res.header('Access-Control-Allow-methods:GET,POST,PUT,DELETE');
// //     console.log(req.body);
// //     var Tracker = {
// //       Name:req.body.requirements.Name,
// //       Field:req.body.requirements.Field,
// //       Institution:req.body.requirements.Institution,
// //       Category:req.body.requirements.Category,
// //       Duration:req.body.requirements.Duration
// //         }
// //         var Tracker = new TrackData(Tracker);
// //         Tracker.save();
// // })
// app.listen(5000,()=>{
//     console.log("server started...")

// });


const express = require('express')
const app = express()
const port = 4300;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const cors = require('cors')
const bcrypt = require('bcrypt');

app.use(cors())

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Nandhu:Nandhu2004@cluster0.hursawp.mongodb.net/trackerDB")
  .then(() => console.log('MongoDB Connected!'))

  .catch((e)=>{
    console.log('DB not connected')
  })


//model 1
const { Schema } = mongoose;
// const userSchema = new Schema({
//   formName: String,
//   formPhoneno: Number,
//   formEmail: String,
//   formDob: String,
//   formBatch: String,
//   formGender: String
// });
// const User = mongoose.model('User', userSchema);


const loginSchema = new Schema({

  username: String,
  password: String,
  
});
const Login = mongoose.model('Login', loginSchema);


app.post('/admin', jsonParser,(req, res)=> {

  console.log(req.body);

  const {username,password}=req.body;
  Login.findOne({username:username}).then((result)=>{
    
    console.log(result)
 

    if(result){
      
      if(result.password == password){

        res.status(200).send({msg:'Login Successfull', role: result.role});
       
      }else{
        res.status(500).send({msg:'Password INCORRECT',result})
      }

    }else{

    res.status(500).send({msg:'Wrong Username',result})
    }
 
  })
})

app.use(bodyParser.json())


app.get('/', function(req,res){
  res.send('Hello World')
})

app.post('/faculty', jsonParser,(req,res)=>{
  console.log("body data :",req.body);

const {username,password,confirmpassword,phoneno} = req.body;

  const createForm = new User({
   username:username,
   password:password,
   confirmpassword:confirmpassword,
   phoneno:phoneno

  })

  createForm.save().then((result)=>{
    res.status(201).json({msg:'Form created successfully',result})
  })
})



app.listen(port, () => {

  console.log("Server running...", port)
})



