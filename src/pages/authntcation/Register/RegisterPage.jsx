import React from 'react';
import { useState } from 'react';
import registerImg from"../../../assets/register.png"
import "./Register.css"
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from"../../../firebase/config"


import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';

const RegisterPage = () => {


  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [cPassword,setCpassword]=useState("");
  const [isLoading,setIsLoading]=useState(false);

  const navigate =useNavigate();

  const formHandler=(e)=>{
    e.preventDefault();
    if (password !== cPassword)
    {
      toast.error("pasword doesont match")
      console.log("pasword doesont match")
      return("pasword doesont match")
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false);
    toast.success("success");
    navigate("/login")
    // ...
    })
   .catch((error) => {
    toast.error(error.message)
    setIsLoading(false);
    // ..
    });
    
  }
  return (
    <>
    <div>
    <ToastContainer />
    {
      isLoading&&<Loader></Loader>
    }
    <div className='container'>
      <div className='box'>
          <div>
            <form className='form' onSubmit={formHandler}>
            <h1 className='header'>Register</h1>
            
              <label>email</label>  
              <input type='email' placeholder='enter your email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            
              <label>password</label> 
              <input type='password' placeholder='enter your password' required value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>

              <label>confirm password</label> 
              <input type='password' placeholder='enter your password again' required value={cPassword} on onChange={(e)=>{setCpassword(e.target.value)}}></input>
              
              <Button className='btn'  type='submit'>submit</Button>
              <Button className='btngoogle' variant="success" >login in with Google</Button>
              <NavLink to="/login" style={{textDecoration:"none" }}><span>   Dont have account?     </span>login</NavLink>
            </form>
          </div>
          <div className='img'>
            <img src={registerImg} alt='login' style={{width:"600px" , marginLeft:"500px" ,marginTop:"50px"}}></img>
          </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default RegisterPage;
