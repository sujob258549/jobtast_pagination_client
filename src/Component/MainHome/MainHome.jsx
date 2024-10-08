import React from 'react';
import Slider from './Slider';
import Banner from './banner';
import ImageMarque from './ImageMarque';
import ImageMarque2 from './ImageMarque2';
import Developer from './Developer';
import BrandProduct from './BrandProduct';
import DeveloperSosalmedia from './DeveloperSosalmedia';

const MainHome = () => {
    return (
        <div>
           <Slider></Slider>
           <Banner></Banner>
           <ImageMarque2></ImageMarque2>
           <ImageMarque></ImageMarque>
           <BrandProduct></BrandProduct>
           <Developer></Developer>
           <DeveloperSosalmedia></DeveloperSosalmedia>
        </div>
    );
}

export default MainHome;
