import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = 'https://doghousefit.us8.list-manage.com/subscribe/post?u=b2cfc16106c06e622f3e213b8&amp;id=ee247e2ee5&amp;f_id=001e63e0f0';

// I had to modify the dependency to change the placeholder text
// Any npm install changed will overried it
// It should be pretty easy to change it back though

const MailChimpForm = () => <MailchimpSubscribe url={url} />;

export default MailChimpForm;