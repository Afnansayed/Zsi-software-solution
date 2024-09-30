
import React from 'react';
import Banner from '../BannerWithNavbar/Banner';
import Footer from '@/components/sheared/footer/Footer';
import Recomended from '../Recomended/Recomended';
import Comperigion from '../Comperigion/Comperigion';
import Services from '../Services/Services';
import Goal from '../Goal/Goal';

const Home = () => {
    return (
        <div className=''>
             <Banner/>
             <Services/>
             <Goal></Goal>
             <Comperigion/>
             <Recomended/>
             <Footer/>
        </div>
    );
};

export default Home;