import video from '../visuals/LandingPageBackground.mp4';
import circle from '../visuals/DrawnCircle.svg';
import arrow from '../visuals/Arrow.svg';

const LandingPage = () => {
    return (
        <div className="landingpage">
            <video autoPlay loop muted id="landingpage-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="message">
                <h1>Workout <span>Smarter</span>, Not <span>Harder</span></h1>
                <p>Fitness information you actually understand</p>
                <img src={circle} alt="" draggable="false" />
            </div>
            <a href="#signup"><img src={arrow} alt="" draggable="false" /></a>
        </div>
    );
}

export default LandingPage;