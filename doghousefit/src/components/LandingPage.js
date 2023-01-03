import video from '../visuals/LandingPageBackground.mp4';

const LandingPage = () => {
    return (
        <div className="landingpage">
            <video autoPlay loop muted id="landingpage-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="message">
                <h1>Workout <span>Smarter</span>, Not <span>Harder</span></h1>
                <p>Fitness information you actually understand</p>
            </div>
        </div>
    );
}

export default LandingPage;