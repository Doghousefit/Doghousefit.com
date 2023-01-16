import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Newsletters from './pages/Newsletters/Newsletters';
import Contact from './pages/Topics';
import Issue from "./pages/Issue/Issue";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newsletters" element={<Newsletters />} />
                <Route path="/newsletters/:id" element={<Issue />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
                <Route path="/topics" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwitch;