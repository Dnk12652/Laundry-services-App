const express = require('express');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const cors = require("cors")
const SECRET = "bacth8landaury";
// const jwt = require('jsonwebtoken');
// SECRET = "RESTAPI"
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
const MONGO_URI = "mongodb+srv://Naveen_126:Co2vOTvuONZK6xjw@test.aatxd.mongodb.net/laundryservice?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI)
    .then(()=>{console.log("Connected to database")}).catch((err)=>{

    console.log(err.message);

});


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
    jwt.verify(token,SECRET,function(err,decoded){
        if(err){
            return res.status(401).json({
                status:"failed",
                
                message:"invalid token"
            })
        }
        else{
            req.user = decoded.data
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