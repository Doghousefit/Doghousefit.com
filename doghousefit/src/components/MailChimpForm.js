// import MailchimpSubscribe from "react-mailchimp-subscribe"
import Mailchimp from "react-mailchimp-form";
  
// export default SimpleForm;
const MailChimpForm = () => <Mailchimp
    action = { process.env.REACT_APP_MAILCHIMP_URL }

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