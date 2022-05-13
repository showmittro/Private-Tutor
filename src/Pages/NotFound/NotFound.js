import React from 'react';
import  NotFoundBg from '../../image/NotFound.jpg'

const NotFound = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-red'>Sorry woring Page Please try Again</h3>
            <img src={NotFoundBg}  className="img-fluid" alt="" />
        </div>
    );
};

export default NotFound;