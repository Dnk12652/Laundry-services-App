const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bodyparser = require("body-parser");
const emailvalidation = require("deep-email-validator")


const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const { body,oneOf ,validationResult } = require('express-validator');
const SECRET = "bacth8landaury";

router.use(bodyparser());
router.get("/details",async(req,res)=>{
    const user = await User.find()
    return res.json({
        status:"fetched successfully",
        message:"fetched successfully",
        user,
        statuscheck:"success"
    })
})
//========================user Registration=====================// 
router.post("/register",body("email"), body("name"),body("phone"),body("password"),body("state"),body("district") ,body("address"),body("pincode"),async (req, res) => {
    try { 
      //======checking validation must contain email name password====////
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
                    //destructuring required body values
     const  {name, email, password,phone,state,district,address,pincode}= req.body;
     var re = /\S+@\S+\.\S+/;
        valid=re.test(email)
           var re = /\S+@\S+\.\S+/;
        
             
        if (!valid){
            return res.status(401).json({
                
                statuscheck:"failed",
                message:"enter valid email",
              
            })
        }
   
        const existinguseremail = await User.findOne({email:email})
        const existinguserwithphone = await User.findOne({phone:phone})
        if (existinguseremail || existinguserwithphone){
            return res.status(200).json({     
                message:"user already registered",
                statuscheck:"failed"
            })
        }
    
        
     
 
        //======encoding user enter password while registrations===///
        bcrypt.hash(password, 10, async function(err, hash) {
         
            if(err){
                res.status(400).json({
                    status: "failed",
                    statuscheck:'failed',
                    message: "Invalid details"
                })
            }
            const user = await User.create(
                {
                    name, 
                    email, 
                    password:hash,
                    phone,
                    state,
                    district,
                    address,
                    pincode
                }
            );
            res.json({
                status: "success",
                statuscheck:'success',
                message:"data added database successfully",
                user
            })
        });
       
    } catch (e) {
        res.json({
            status: "failed",
            statuscheck:'failed',
            message: e.message
        })
    }
})





// ,oneOf([body("email"),body("phone")]), body("password")
//========================user login =====================// 

router.post("/login",body("Bothemailphone"), body("password") ,async (req, res) => {
    try {
        //======checking validation must contain  email and password===//
       
     
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {Bothemailphone,password} = req.body;

        //=============== checking user enter details email or password =====//

        //========validatating is user enter correct email or not=======///
        function validateEmail(email) 
                {
                    var re = /\S+@\S+\.\S+/;
                    return re.test(email);
                }
                
                valid=validateEmail(Bothemailphone)
                //=====valid it will goes if condition====////
                if (valid){
                var email = Bothemailphone
                }else{
                    console.log(Bothemailphone)
                    //=======if here user enter not valid email ==checking valid phone ===//
                    var check = parseInt(Bothemailphone)
                    const validatenumber = typeof check
                    console.log('type of' ,validatenumber)
                   
                    if (validatenumber === 'number'){
                        var phone= Bothemailphone
                    }else{
                        return res.status(401).json({
                            message:"enter valid email or phone number",
                            statuscheck:'failed'
                        })
                    }
                    }
        //========finding correct user with help of user email ======//

        if (email){
            const user = await User.findOne({email:email});
            if(!user){
               return res.status(401).json({
                    status:"failed",
                    statuscheck:'failed',
                    message:"Invalid user"
                })
        }
        bcrypt.compare(password, user.password).then(function(result) {
            if(result){
                var token = jwt.sign({id:user._id}, SECRET);
              return  res.json({
                    status: "sucess",
                    token,
                    statuscheck:"success",
                    message:'token generated'
                })
            }else{
              return  res.status(401).json({
                    status: "failed",
                    message: "Not Authenticated",
                    statuscheck:'failed'
                })
            }
        });
        }else if (phone){
            const user = await User.findOne({phone:phone});
            if(!user){
              return  res.status(401).json({
                    status:"failed",
                    message:"Invalid user",
                    statuscheck:'failed'
                })
        }
        bcrypt.compare(password, user.password).then(function(result) {
            if(result){
                var token = jwt.sign({data:user._id}, SECRET);
                
              return  res.json({
                    status: "sucess",
                    token,
                    statuscheck:'success'
                })
            }else{
             return  res.status(401).json({
                    status: "failed",
                    message: "Not Authenticated",
                    statuscheck:'failed'
                })
            }
        });
        }
        
    
       
        // // =============comparing user enter password and database contain password=======//
       
       
    } catch (e) {
       res.json({
            status: "user-failed",
            message: e.message,
            statuscheck:'failed'
        })
    }
})

module.exports = router;