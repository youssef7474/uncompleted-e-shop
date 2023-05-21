import React from 'react';
import forgotImg from"../../../assets/forgot.png"
import "./RestPaasword.css"
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom"
import { useState } from 'react';
import {sendPasswordResetEmail } from "firebase/auth";
import {auth} from"../../../firebase/config"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../components/Loader/Loader';

const RestPassword = () => {

  const [email,setEmail]=useState("");
  const [isLoading,setIsLoading]=useState(false);


  const formHandler=(e)=>{
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false);
    toast.success("success chack your gmail");
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false);
    // ..
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
            <img src={forgotImg} alt='login' style={{width:"600px"  ,marginTop:"50px"}}></img>
        </div>
          <div>
            <form className='form' onSubmit={formHandler}>
            <h1 className='header'>Rest your password</h1>
            
              <label>Rest password</label>  
              <input type='email' placeholder='enter your email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
              <div className='links'>
              <NavLink to="/login" style={{textDecoration:"none" }}>login</NavLink>
              <NavLink to="/register" style={{textDecoration:"none" }}>register</NavLink>
              </div>
              <Button className='btn' variant="success" type='submit'>submit</Button>
            </form>
          </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default RestPassword;
