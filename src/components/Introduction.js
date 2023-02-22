import React from 'react';
import banner from '../Images/about-banner1.webp'
import './Introduction.css'
function Intro(){
    return (
        <div className="intro">
            <div className="banner">
                <img src={banner} alt='banner' className='banner-img'></img>
            </div>
            <div className="about">
                <h1>Introduction</h1>
                <div className='dividor'></div>
                <div className='data'>
                Tata Projects is one of the fastest growing and most admired Technology led engineering, 
                procurement and construction (EPC) company in India. We have expertise in providing sustainable 
                solutions in the execution of large and complex urban and industrial infrastructure projects while 
                also demonstrating strong presence in refineries, petrochemical plants. We leverage our domain knowledge 
                across various business segments to address the shift to clean energy to meet the nation’s Net Zero ambitions.
                </div>
                <button className='know-more'>Know more</button>
            </div>
        </div>
    );
}
export default Intro;