import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({sub}) => {
    const {img,name,description,tutionfish} = sub;

    return (
        <div class="col">
    <div class="card" style={{height:'500px',border:'1px solid #2E4053'}}>
      <img src={img} class="card-img-top mx-auto pt-4" style={{height:'200px',width:'200px'}} alt="" />
      <div class="card-body">
        <h5 class="card-title">Subject Name: {name}</h5>
        <h5 class="card-title">Fee:${tutionfish}</h5>
        <p class="card-text">{description}</p>
        <Link to='/details'><button style={{background:'#990000'}}  type="button" class="btn text-white fw-bold btn-sm">Enroll Now</button></Link>
      </div>
    </div>
  </div>
    );
};

export default Service;