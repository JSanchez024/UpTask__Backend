import nodemailer from 'nodemailer'

const config = () => {
    return {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "3b715365750290",
          pass: "f4673124f1579c"
  }
    }
}

export const trasporter = nodemailer.createTransport(config());

//transport.sendMail({
//  from: "Private Person <from@example.com>",
//  to: "A Test User <to@example.com>",
//  subject: "Hello from Mailtrap",
//  text: "This is a test e-mail message."
//}, (error, info) => {
//  if (error) {
//    return console.log(error);
//  }
//  console.log("Message sent: %s", info.messageId);
//});