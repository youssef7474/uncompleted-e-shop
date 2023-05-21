import React from 'react';
import { useState } from 'react';
import loginImg from"../../../assets/login.png"
import "./login.css"
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../components/Loader/Loader';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from"../../../firebase/config"
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLoading,setIsLoading]=useState(false);
  const navigate =useNavigate();

  const formHandler=(e)=>{
    e.preventDefault();
    setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false);
    toast.success("success");
    navigate("/")
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false);
  });
    
  }

  const provider = new GoogleAuthProvider();
  const signInGoogle=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    toast.success("login success");
    navigate("/")
  }).catch((error) => {
    toast.error(error.message)
  });
  }

  return (
    <>
    <ToastContainer />
    {
      isLoading&&<Loader></Loader>
    }
    <div>
      <div className='container'>
        <div className='box'>
          <div className='img'>
            <img src={loginImg} alt='login' style={{width:"600px"}}></img>
          </div>
            <div>
              <form className='form' onSubmit={formHandler}>
              <h1 className='header'>login </h1>
              
                <label>email</label>  
                <input type='email' placeholder='enter your email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
              
                <label>password</label> 
                <input type='password' placeholder='enter your password' required value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>

                <Button className='btn' variant="success" type='submit'>submit</Button>

                <Button className='btngoogle' variant="success" type='submit' onClick={signInGoogle}>login in with Google</Button>

                <NavLink to="/restPassword" style={{textDecoration:"none" ,marginLeft:"200px"}}>RestPassword</NavLink>
                <p style={{color:"red" ,marginLeft:"100px"}}>-----OR-----</p>
                <NavLink to="/register" style={{textDecoration:"none" }}><span>   Dont have account?     </span>Register</NavLink>
              </form>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
