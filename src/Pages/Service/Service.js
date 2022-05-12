import React from 'react';

const Service = ({sub}) => {
    const {img,name,description,tutionfish} = sub;

    return (
        <div class="col">
    <div class="card" style={{height:'500px',border:'1px solid grey'}}>
      <img src={img} class="card-img-top mx-auto pt-4" style={{height:'200px',width:'200px'}} alt="" />
      <div class="card-body">
        <h5 class="card-title">SubjectName:{name}</h5>
        <h5 class="card-title">Fee$:{tutionfish}</h5>
        <p class="card-text">{description}</p>
        <button style={{background:'#990000'}}  type="button" class="btn text-white fw-bold btn-sm">Enroll Now</button>
      </div>
    </div>
  </div>
    );
};

export default Service;