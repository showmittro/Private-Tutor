import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const {user,logOut} = useFirebase();
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Personal Tutor</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" className='text-decoration-none fw-bold' ><a style={{color:'#990000'}} className="nav-link">Home</a></Link> 
        </li>
        <li class="nav-item">
        <Link className='text-decoration-none fw-bold' to="/login"> <a style={{color:'#990000'}} className="nav-link" href="#">LogIn</a></Link> 
        </li>
        <li className="nav-item">
        <Link className='text-decoration-none fw-bold' to="/blogs"> <a style={{color:'#990000'}} className="nav-link" href="#">Blogs</a> </Link>
        </li>
        <li className="nav-item">
        <Link className='text-decoration-none fw-bold' to="/about"><a style={{color:'#990000'}} className="nav-link" href="#">About</a></Link>
        </li>
        {

user.uid?
<div className="mx-2" >
  {user.displayName}
  <img src={user.photoUrl} alt="" />

  <button className="btn btn-outline-success" onClick={logOut}>LogOut</button>
</div> : <div className="d-flex">
</div>

}
       
        
      </ul>
      
    </div>
  </div>
</nav>
            
        </>
    );
};

export default Header;