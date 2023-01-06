import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Newsletters from './pages/Newsletters';
import About from './pages/Contact';
import Contact from './pages/Contact';

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