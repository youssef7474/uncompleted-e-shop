import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import "./Header.css"
import { signOut } from "firebase/auth";
import {auth} from"../../firebase/config"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from  '../Loader/Loader'

const Header = () => {
  const [isLoading,setIsLoading]=useState(false);
  const navigate =useNavigate();
 

  
  const logOutHandler=()=>{
    setIsLoading(true);
    signOut(auth).then(() => {
      setIsLoading(false);
      toast.success("log out successful");
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      toast.error(error.message)
      setIsLoading(false);
    });
  }
  

  return (
    <>
    <ToastContainer />
    {
      isLoading&&<Loader></Loader>
    }
    <div>
  <Navbar bg="dark" variant="dark">
    <Container >
      <Navbar.Brand > 
          <NavLink to="/" style={{textDecoration:"none" ,fontSize:"30px"  ,marginRight:"60px"}} >E-Shop</NavLink>
      </Navbar.Brand>
      <Nav className="me-auto" >
        <Nav.Link >
          <NavLink to="/" style={{textDecoration:"none" ,color:"white"}}>Home</NavLink>
        </Nav.Link>
        <Nav.Link >
          <NavLink to="/contact" style={{textDecoration:"none" ,color:"white"}}>contact</NavLink>
        </Nav.Link>
      </Nav>
      <div style={{marginLeft:"50px"}}>
        <Nav className="me-auto">
          <Nav.Link >
            <NavLink to="/login" style={{textDecoration:"none" ,color:"white"}}>login</NavLink>
          </Nav.Link>
          <Nav.Link >
            <NavLink to="/register" style={{textDecoration:"none" ,color:"white"}}>register</NavLink>
          </Nav.Link>
          <Nav.Link >
            <a style={{textDecoration:"none" ,color:"white"}} onClick={logOutHandler}>LogOut</a>
          </Nav.Link>
          <Nav.Link >
            <NavLink to="/orders" style={{textDecoration:"none" ,color:"white"}}>my orders</NavLink>
          </Nav.Link>
          <Nav.Link >
            <NavLink to="/cart" style={{textDecoration:"none" ,color:"white"}}>Cart
            <FaShoppingCart style={{color: "white" ,fontSize:"20px"}}></FaShoppingCart>
            </NavLink>
          </Nav.Link>
        </Nav>
      </div>
    </Container>
  </Navbar>
    </div>
    </>
  );
}

export default Header;
