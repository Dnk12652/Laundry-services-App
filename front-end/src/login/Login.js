import React,{useState} from 'react'
import FooterComponent from '../commanComponent/FooterComponent'
import Headercomponent from "../commanComponent/Headercomponent"
import {useHistory} from "react-router-dom"
import "../login/login.css"
import axios from "axios"


function Login() {
  const [data,setData]=useState({Bothemailphone:'',password:''})
  const [auth,setAuth]=useState(false)

  const signin="Register"
 const path="/register"
 const history = useHistory()
 const routeregister=()=>{
   history.push('/register')

 }

 const routeorder=()=>{
   console.log(data)
   axios.post("http://localhost:5000/login",data,{
    headers:{
      "Content-Type":"application/json"
        }
    }).then((res)=>{
        console.log(res)
       localStorage.setItem('token',res.data.token)
        if(res.data.statuscheck === 'success'){
            history.push('/orders')
        }else{
          window.alert(res.data.message)
        }
    })
  }
 const changeData=(e)=>{
  e.preventDefault()
  setData({...data,[e.target.name]:e.target.value})
}
  return (
    <div className="login-parent">
    <Headercomponent registration={signin} action={path}/>
    <div className='login-details'>
    <div  className="login-btn">
      <div  className="login-details1">
     <h1>Laundry Service</h1>
     <p>Door Wash & Dryclean Service</p>
     </div>
     <div className='login-details2'>
       <p>Don't Have An Account?</p>
       
       <button onClick={routeregister}>Register</button>


     </div>
    </div>


    <div className='login'>
      <h1>SIGN IN</h1>
      <input type="text" name="Bothemailphone" onChange ={changeData} placeholder="Mobile/Email"></input>
      <br/>
      <input type="password"  name='password' onChange ={changeData}  placeholder='Password'></input>
      <p>Forget password?</p>
        <button onClick={routeorder}>
          Sign in
        </button>
 

      
     </div>
     </div>
    <FooterComponent/>
    </div>
  )
}

export default Login
