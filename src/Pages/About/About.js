import React from 'react';
import MePic from '../../image/me.jpg'

const About = () => {
    return (
        <div>
            <div className="container">
                <h1 className='pt-5'>About Me</h1>
                <div className="row align-items-center pt-3">
                    <div className="col-12 col-md-6">
                        <img style={{ height: '400px' }} src={MePic} className="" alt="" />

                    </div>
                    <div className="col-12 col-md-6">
                        <h3>Showmittro Biswas</h3>
                        <p>Hey,,
                            I am Showmittro Biswas. I am a student of Feni Computer Institute of Data Telecommunication and Networking Technology. <br /><br />
                            I am a professional Front End Web developer
                            I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with JavaScript ReactJS.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;