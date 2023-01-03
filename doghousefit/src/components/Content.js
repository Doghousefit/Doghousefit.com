import newsletterexample from '../visuals/NewsletterExample.png';
import MailchimpForm from './MailChimpForm';
import ImageCarousel from './ImageCarousel';

const Content = () => {
    
    return (
        <div className="wrapper">
            <div className='content'>
                <div className="content-container">
                    <h2>Join Our Community</h2>
                    <h5>Sign up for our newsletter to receive weekly fitness updates and news.</h5>
                    <MailchimpForm />
                </div>
                <div className="content-container">
                    <a href="/newsletters"><img src={newsletterexample} alt="example" draggable="false" /></a>
                </div>
            </div>
            <div className='content'>
                <div className="content-container">
                    <ImageCarousel />
                </div>
                <div className="content-container">
                    <h2>Newsletter Archive</h2>
                    <h5>Missed one of our newsletters? Don’t sweat it. We have all our past issues stored here in our archive</h5>
                    <a href="/newsletters" className="archive">View Archive</a>
                </div>
            </div>
        </div>
    )
}

export default Content;