import { useEffect, useRef } from 'react';
import video from '../visuals/LandingPageBackground.mp4';
import circle from '../visuals/DrawnCircle.svg';
import arrow from '../visuals/Arrow.svg';
import thumbnail from '../visuals/Thumbnail.png';

const LandingPage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [videoRef]);
    
    return (
        <div className="landingpage">
            <video autoPlay loop muted id="landingpage-video" playsinline ref={videoRef}>
                <source src={video} type="video/mp4" />
            </video>
            <div className="message">
                <h1>Workout <span>Smarter</span>, Not <span>Harder</span></h1>
                <p>Fitness information you actually understand</p>
                <img src={circle} alt="" draggable="false" />
            </div>
            <a href="#signup"><img src={arrow} alt="" draggable="false" /></a>
            
            {/* For google indexing and SEO */}
            <meta property="og:image" content={thumbnail} />
            <meta property="og:image:type" content="video/mp4" />
            {/* <meta property="og:image:width" content="640" />
            <meta property="og:image:height" content="360" /> */}
        </div>
    );
}

export default LandingPage;