import React from 'react';
import video from '../visuals/LandingPageBackground.mp4';
import logo from '../visuals/Logo.svg';

const LandingPage = () => {
    return (
        <div className="landingpage">
            <img src={logo} alt="logo" className="logo" draggable="false" />
            <video autoPlay loop muted id="landingpage-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="message">
                <h3>Workout <span>Smarter</span>, Not <span>Harder</span></h3>
                <p>Fitness information you actually understand</p>
            </div>
        </div>
    );
}

export default LandingPage;