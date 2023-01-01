import React from 'react';
import newsletterexample from '../visuals/NewsletterExample.png';
import MailchimpForm from './MailChimpForm';


const Content = () => {
    const url = 'https://doghousefit.us8.list-manage.com/subscribe/post?u=b2cfc16106c06e622f3e213b8&amp;id=ee247e2ee5&amp;f_id=001e63e0f0';
    return (
        <div className="wrapper">
            <div className='content'>
                <div className="content-container">
                    <h2>Join Our Community</h2>
                    <h5>Sign up for our newsletter to receive weekly fitness updates and news.</h5>
                    <MailchimpForm />
                </div>
                <div className="content-container">
                    <a href="/test"><img src={newsletterexample} alt="example" draggable="false" /></a>
                </div>
            </div>
            <div className='content'>
                <div className="content-container">
                    <div className="gallery">
                        <a href="/none"><img src={newsletterexample} alt="example" draggable="false" /></a>
                        <a href="/none"><img src={newsletterexample} alt="example" draggable="false" /></a>
                        <a href="/none"><img src={newsletterexample} alt="example" draggable="false" /></a>
                        <a href="/none"><img src={newsletterexample} alt="example" draggable="false" /></a>
                        <a href="/none"><img src={newsletterexample} alt="example" draggable="false" /></a>
                        <a href="/none"><img src={newsletterexample} alt="example" draggable="false" /></a>
                    </div>
                </div>
                <div className="content-container">
                    <h2>Newsletter Archive</h2>
                    <h5>Missed one of our newsletters? Don’t sweat it. We have all our past issues stored here in our archive</h5>
                    <a href="/none" className="archive">View Archive</a>
                </div>
            </div>
        </div>
    )
}

export default Content;