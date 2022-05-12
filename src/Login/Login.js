import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../private-tutor/src/image/google.png'
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { handleGoogleSignIn} = useFirebase();
    return (
        <div>
            <h1>Please LogIn</h1>
                <Button onClick={handleGoogleSignIn} style={{background:'grey', border:'none'}}> <img style={{height:'30px'}} src={google} alt="" /> GoogleSingIn</Button>
            
        </div>
    );
};

export default Login;