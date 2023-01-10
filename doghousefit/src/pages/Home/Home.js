import Navbar from '../../components/Navbar';
import LandingPage from "./LandingPage";
import Content from "./Content";
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Navbar position="absolute" />
      <LandingPage />
      <Content />
      <Footer />
    </>
  );
}

export default Home;
