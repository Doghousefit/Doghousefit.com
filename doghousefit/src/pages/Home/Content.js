import newsletterexample from './visuals/NewsletterExample.png';
import MailchimpForm from './MailChimpForm';
import ImageCarousel from './ImageCarousel';

const Content = () => {
    if(process.env.REACT_APP_MAILCHIMP_URL === undefined) {
        console.log('mailchimp link undefined')
    }
    return (
        <div className="wrapper">
            <div className='content'>
                <div id="signup" className="content-container text">
                    <h2>Join Our Community</h2>
                    <h5>Sign up for our newsletter to receive weekly fitness updates and news.</h5>
                    <MailchimpForm />
                </div>
                <div className="content-container newsletter">
                    <a href="/newsletters"><img src={newsletterexample} alt="example" draggable="false" /></a>
                </div>
                <div className="content-container carousel">
                    <ImageCarousel />

                </div>
                <div className="content-container text">
                    <h2>Newsletter Archive</h2>
                    <h5>Missed one of our newsletters? Don’t sweat it. We have all our past issues stored here in our archive</h5>
                    <a href="/newsletters" className="archive">View Archive</a>
                </div>
            </div>
            <div className="mission-statement">
                <h1>Mission Statement</h1>
                <h4 className="question">Tired of the endless search for reliable fitness information online?</h4>
                <strong>We are too.</strong>
                <p>With so much conflicting advice and information available, it can be overwhelming and confusing to know what to believe and how to achieve your fitness goals. That's why we've created a solution: a website that carefully curates and verifies the most trustworthy fitness information from reputable sources. By providing a one-stop-shop for accurate and reliable fitness information, we can help you easily find the resources you need to live a healthy and active lifestyle. Don't waste any more time sifting through questionable sources - trust us to provide you with the best information to help you reach your goals.</p>
            </div>
            <div className="goals-statement">
                <h1>What We Offer</h1>
                <div className="goal-container">
                    <div className="goal">
                        <h3 className="goal-title">Extensive</h3>
                        <h5>DogHouse isn’t a site only for hardcore lifters. It’s a site for anyone who is curious about improving their knowledge of health and learning about physical culture. </h5>
                    </div>
                    <div className="goal">
                        <h3 className="goal-title">Reliable</h3>
                        <h5>At DogHouse, the source material for our information isn’t “Trust me, bro”. We create resources for the public that source information from trusted databases, scholarly studies, industry professionals, and individuals with a formalized education.</h5>
                    </div>
                    <div className="goal">
                        <h3 className="goal-title">Digestible</h3>
                        <h5>DogHouse aims to provide you with all kinds of fitness and health related information in a way that anyone can read it. We want to make our resources understandable for experts and beginners</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;