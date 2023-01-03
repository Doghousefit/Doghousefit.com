import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Newsletters from './Newsletters';
import About from './About';
import Contact from './Contact';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<App />} />
                <Route path="/newsletters" element = {<Newsletters />} />
                <Route path="/about" element = {<About />} />
                <Route path="/Contact" element = {<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwitch;