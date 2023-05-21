import React from 'react';
import Container from 'react-bootstrap/Container';
import { useRouteError,useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const ErrorPage = () => {
    const error = useRouteError();
    const navigate=useNavigate();

  return (
    <div>
        <Container>
            <div >
                <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                         <i>{error.statusText || error.message}</i>
                    </p>
            </div>
            <Button variant="primary" style={{marginLeft:"500px"}} onClick={()=>navigate("/",{replace:true})}>Go Back</Button>
        </Container>
    </div>
  );
}

export default ErrorPage;
