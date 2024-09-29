
import React from 'react';
import Banner from '../BannerWithNavbar/Banner';
import Footer from '@/components/sheared/footer/Footer';
import Recomended from '../Recomended/Recomended';

const Home = () => {
    return (
        <div className=''>
             <Banner/>
             <Recomended/>
             <Footer/>
        </div>
    );
};

export default Home;