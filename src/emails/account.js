const mailgun = require('mailgun-js')
const api_key = process.env.MAILGUN_API_KEY

const DOMAIN = 'sandbox2c70631fedad42989c278a5f8a234e96.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});

const sendWelcomeEmail = (email , name) =>{

    const data = {
        from: 'Task App <taskapp&co@example.com>',
        to: email,
        subject: 'Thanks For Joining',
        text: `Welcome to the app, ${name}. Let me now how you get along with the app.`
    };
    mg.messages().send(data, function (error, body) {
        //console.log(body);
    });

}

const sendCancelEmail = (email , name) =>{

    const data = {
        from: 'Task App <taskapp&co@example.com>',
        to: email,
        subject: 'Thanks for being with us!',
        text: `Goodbye, ${name}. Let us know if we could have done something better to revert your choice.`
    };
    mg.messages().send(data, function (error, body) {
        //console.log(body);
    });

}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}