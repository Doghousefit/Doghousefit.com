import Navbar from "./components/Navbar";

const WIP_Style = {
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    top: '50vh',
}

const About = () => {
    return (
        <div>
            <Navbar />
            <h1 style={WIP_Style}>Work in progress</h1>
        </div>
    );
}

export default About;