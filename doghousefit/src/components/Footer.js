import Linkedin from '../visuals/Linkedin.svg';
import Twitter from '../visuals/Twitter.svg';
import Instagram from '../visuals/Instagram.svg';

const Footer = () => {
    return (
        <footer>
            <div className="line"></div>
            <div className="footer">
                <div className="footer-container">
                    <h5>Socials</h5>
                    <div className="socials-container">
                        <a href="https://www.twitter.com"><img src={Twitter} alt="Twitter" draggable="false" /></a>
                        <a href="https://www.Linkedin.com"><img src={Linkedin} alt="Linkedin" draggable="false" /></a>
                        <a href="https://www.instagram.com"><img src={Instagram} alt="Instagram" draggable="false" /></a>
                    </div>
                </div>
                <div className="footer-container">
                    <h5>Contact</h5>
                    <h6>support@doghousefit.com</h6>
                </div>
            </div>
            <p className="copyright">Copyright © 2022 DogHouse</p>
            <a href="/none" className="privacy-policy">Terms of Use & Privacy Policy</a>
        </footer>
    )
}

export default Footer;