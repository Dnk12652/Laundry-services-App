const express = require('express');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const cors = require("cors")
const dotenv = require("dotenv").config()
const app = express(); // create a new express application
//Initializing the Routes
const orderRoutes = require('.//routes//orders');
const Route_login = require("./routes/login_and_register")
const create_order=require("./routes/create-order")


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))  



// Connecting to the database using mongoose
const connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      connect.connection.host,
      connect.connection.name,
      "db connected"
    );
  } catch (err) {
    console.log(err);
  }
};

connection();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Authorization
app.use("/orders",(req,res,next)=>{

    var token = req.headers.authorization.split("Bearer ")[1];
    if(!token){
        return res.status(401).json({
            status:"failed",
            message:"token is missing"
        })
    }
    jwt.verify(token,process.env.SECRET,function(err,decoded){
        if(err){
            return res.status(401).json({
                status:"failed",
                
                message:"invalid token"
            })
        }
        else{
            req.user = decoded.id
            next();
        }
    })
})



   
app.use("/",Route_login)

app.use("/",create_order)

app.use("/", orderRoutes)




//connecting to the server
app.listen(process.env.PORT || 5000,()=>{  // bind the connections on this port and listen to it
    console.log(`laundry service listening on ${5000}`);
})