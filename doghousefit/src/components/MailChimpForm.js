// import MailchimpSubscribe from "react-mailchimp-subscribe"
import Mailchimp from "react-mailchimp-form"

const url = 'https://doghousefit.us8.list-manage.com/subscribe/post?u=b2cfc16106c06e622f3e213b8&amp;id=ee247e2ee5&amp;f_id=001e63e0f0';
  
// export default SimpleForm;
// const MailChimpForm = () => <MailchimpSubscribe url={url} />;
const MailChimpForm = () => <Mailchimp
    action={url} 

    //Adding multiple fields:
    fields={[
    {
        name: 'EMAIL',
        placeholder: 'youremail@domain.com',
        type: 'email',
        required: true
    }
    ]}
    // Change predetermined language
    messages = {
    {
        sending: "Sending...",
        success: "Thank you for subscribing!",
        error: "An unexpected internal error has occurred.",
        empty: "You must write an e-mail.",
        duplicate: "Too many subscribe attempts for this email address",
        button: "Subscribe"
    }
    }
    // // Add a personalized class
    // className='<YOUR_CLASSNAME>'
/>
export default MailChimpForm;