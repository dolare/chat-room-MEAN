var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var mail = {};

var transporter = nodemailer.createTransport((smtpTransport({
    host: 'smtp.gmail.com',
    secureConnection: false, // use SSL
    port: 587, // port for secure SMTP
    auth: {
        user: 'dolarebrave@gmail.com',
        pass: 'Lr!129114'
    }
})));

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'dolarebrave@gmail.com', // sender address
    to: 'dolareberave@qq.com', // list of receivers
    subject: 'Active Link', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object

mail.sendMail = function(to, url) {
    mailOptions.to = to;
    mailOptions.html = '<b>Please click following link to active</b><br/><b>' + url + '</b>';
    mailOptions.html = 'Please click following link to active \n' + url;
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}

module.exports = mail;