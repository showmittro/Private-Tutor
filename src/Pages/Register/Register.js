import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import RegisterBg from '../../image/login.jfif'

const Register = () => {
    const { error, handleRegistration,handleNameChange,handleEmailChange,handlePasswordChange} = useFirebase();
   
    return (
        <div>
            <h3>Please Register</h3>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                       <form onSubmit={handleRegistration}>
                       <div class="mb-3">
                            <input 
                            type="text" 
                            class="form-control" 
                            id="name"
                            onBlur={handleNameChange}
                             placeholder="Your Name" 
                             required />
                        </div>
                       <div class="mb-3">
                            <input 
                            type="email" 
                            class="form-control"
                             id="email"
                             placeholder="Your Email"
                             onBlur={handleEmailChange}
                             required />
                        </div>
                        <div class="mb-3">
                            <input type="password" 
                            class="form-control" 
                            id="password"
                            onBlur={handlePasswordChange}
                            placeholder="Your Password" 
                            required />
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="form-control text-white fw-bold" style={{background:'#2E4053'}} >Register</button>
                        </div>
                       </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className='img-fluid h-100 w-100' src={RegisterBg} alt="" />

                    </div>
                    <p>
                    Already Have an account?<Link className='' to="/login">logIn</Link>
                </p>
                </div>
            </div>
            
        </div>
    );
};

export default Register;