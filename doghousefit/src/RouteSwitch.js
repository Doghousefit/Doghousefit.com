import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Newsletters from './pages/Newsletters/Newsletters';
import About from './pages/About';
import Contact from './pages/Contact';
import Issue from "./pages/Issue/Issue";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newsletters" element={<Newsletters />} />
                <Route path="/newsletters/:id" element={<Issue />} />
                <Route path="/about" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwitch;