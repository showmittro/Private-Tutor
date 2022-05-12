import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [tutorSub, setTutorSub] = useState([])


    useEffect( () => {
        fetch('./TutorBooks.json')
        .then(res=>res.json())
        .then(data=>setTutorSub(data))
    },[])


    return (
        <div>
            <h3 style={{color:'#990000'}} className='pb-5 pt-3 fw-bold'>My Service</h3>
            <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                  tutorSub.map(sub=><Service
                  key={sub.id}
                  sub={sub}
                  ></Service>)
                }


            </div>
            </div>

        </div>
    );
};

export default Services;