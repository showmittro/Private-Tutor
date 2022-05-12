import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../../private-tutor/src/image/google.png'
import useFirebase from '../hooks/useFirebase';
import LoginPage from '../image/login.jfif'

const Login = () => {
    const { handleGoogleSignIn } = useFirebase();
    return (
        <div>
            <h1>Please LogIn</h1>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                       <form>
                       <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" required/>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Your Password" required />
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="form-control text-white fw-bold" style={{background:'#2E4053'}} >LogIn</button>
                        </div>
                       </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className='img-fluid h-100 w-100' src={LoginPage} alt="" />

                    </div>
                    <p>
                    New to Personal-Tutor? <Link className='' to="/register">Create an account</Link>
                </p>
                </div>
            </div>


            <Button onClick={handleGoogleSignIn} style={{ background: 'grey', border: 'none' }}> <img style={{ height: '30px' }} src={google} alt="" /> GoogleSingIn</Button>

        </div>
    );
};

export default Login;