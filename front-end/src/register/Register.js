import React,{useState} from 'react';
import FooterComponent from '../commanComponent/FooterComponent'
import Headercomponent from "../commanComponent/Headercomponent"
import {useHistory} from "react-router-dom"
import "../register/register.css"
import axios from "axios"



function Register() {
  const [status,setStatus]=useState(false)
  const  [data,setDetails]=useState({
    name:"",
    email:"",pincode:'',password:'',address:"",state:'',district:'',phone:0})
  const history=useHistory()
  const routesignin=()=>{
    history.push('/')
  
 
  }

  const changeData=(e)=>{
    e.preventDefault()
    setDetails({...data,[e.target.name]:e.target.value})
  }
  const submitData=()=>{
    console.log(data)
    axios.post("http://localhost:5000/register",data,{
      headers:{
        "Content-Type":"application/json"
          }
      }).then((res)=>{
          console.log(res)
          if(res.data.statuscheck === 'success'){
              history.push('/')
          }else{
            window.alert(res.data.message)
          }
      })
    }
  
   
   

 
 const signin="Signin"

 const path="/"
  return (
    <div className="register-parent">
    <Headercomponent registration={signin} action={path}/>
    <div className='user-register'>
    <div className="register-btn">
      <div className="register-details">
     <h1>Laundry Service</h1>
     <p>Door Wash & Dryclean Service</p>
     </div>
     <div className='register-details2'>
       <p>Already Have Account</p>
   
       <button onClick={ routesignin} > Signin</button>
      

     </div>
    </div>

    <div className='registration-form'>
      <div className='register-name'>
        <h1>REGISTER</h1>
      </div>
      
      <div className='forms'>
      <form>
      <div className='form-1'>
    
       <input type="text" name="name" required onChange= {changeData}   placeholder='Name'/>
       <br/>
       <input type="number" name="phone"  maxLength={10}  required onChange={ changeData}  placeholder='Phone'  />
       <br/>
       <input type="text" name="district" required onChange={ changeData}   placeholder='District' />
       <br/>
       <input type="text"  name="pincode" maxLength={6}  required onChange={ changeData} placeholder='Pincode'  />
       <br/>

      </div>
      <div className='form-2'>
       <input type="text" name="email"  required  onChange={ changeData}   placeholder='Email'  />
       <br/>
       <input type="text" name="state" required  onChange={ changeData} placeholder='State' />
       <br/>
       <input type="text" name="address" required  onChange={ changeData}   placeholder='Address' />
       <br/>
       <input type="password" name="password"  required  onChange={ changeData}   placeholder='password'/>
   
      
      </div>
      <div className='user-data-btn'>
        <input type='checkbox'/>
        <span><a href="#">I agree to Terms & Condition receiving marketing  and promotinal materials</a></span>
        <br/>
        <button type="button" onClick={submitData}>Register</button>
      </div>
      </form>
     

      </div>
     
    
     
      
     </div>
        
    </div>
    <FooterComponent/>
    </div>
  )
}

export default Register



