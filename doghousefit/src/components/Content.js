import React from 'react';
import newsletterexample from '../visuals/NewsletterExample.png';
import SimpleForm from './MailChimpForm';
import MailChimpForm from './MailChimpForm';

const Content = () => {
    return (
        <div className="wrapper">
            <div className='content'>
                <div className="content-container">
                    <h2>Join Our Community</h2>
                    <h5>Sign up for our newsletter to receive weekly fitness updates and news.</h5>
                    <MailChimpForm />
                </div>
                <div className="content-container">
                    <img src={newsletterexample} alt="example" draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Content;