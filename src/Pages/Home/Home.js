import React from 'react';
import BannerBg from '../../image/banner.webp'
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                         <img className='img-fluid' src={BannerBg} alt="" />
                    </div>
                    <div className="col-12 col-md-6 ">
                       <div className='pt-3'>
                       <h2 className='fw-bold'>Personal <span className='fw-bold' style={{color:'#990000'}}>Private Tutor</span> </h2>
                        <p style={{color:'#9e7b7b'}} className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione alias quidem veniam, architecto illum sunt? Voluptas alias harum et dicta ab? Sequi, blanditiis fugiat?</p>

                        <button style={{background:'#990000'}} type="button" class="btn btn-md text-white fw-bold">Leran More</button>
                       </div>

                    </div>
                </div>
            </div>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;