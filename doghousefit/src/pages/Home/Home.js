import Navbar from '../../components/Navbar';
import LandingPage from "./LandingPage";
import Content from "./Content";
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
