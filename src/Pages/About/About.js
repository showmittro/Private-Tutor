import React from 'react';
import MePic from '../../image/me.jpg'

const About = () => {
    return (
        <div>
            <div className="container">
                <h1 className='pt-5'>About Me</h1>
                <div className="row align-items-center pt-3">
                    <div className="col-12 col-md-6">
                        <img style={{height:'400px'}} src={MePic} className="" alt="" />

                    </div>
                    <div className="col-12 col-md-6">
                        <h3>Showmittro Biswas</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas ut placeat quas consectetur dolores qui, distinctio velit maxime itaque ab praesentium officiis modi eius esse blanditiis vel voluptatem. Quo expedita dolorem fuga eaque est libero quasi ipsum! Molestiae illo hic, et error quos nemo quo ducimus? Possimus, dolorum quibusdam!</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;