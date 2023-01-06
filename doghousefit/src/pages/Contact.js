import Navbar from "../components/Navbar";

const WIP_Style = {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    top: '50vh',
}

const Contact = () => {
    return (
        <div>
            <Navbar />
            <h1 style={WIP_Style}>Work in progress</h1>
        </div>
    );
}

export default Contact;