
import React from 'react';
import Banner from '../BannerWithNavbar/Banner';
import Footer from '@/components/sheared/footer/Footer';
import Recomended from '../Recomended/Recomended';
import Comperigion from '../Comperigion/Comperigion';

const Home = () => {
    return (
        <div className=''>
             <Banner/>
             <Comperigion/>
             <Recomended/>
             <Footer/>
        </div>
    );
};

export default Home;