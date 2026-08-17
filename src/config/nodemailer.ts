import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
 
let transporter: nodemailer.Transporter;
 
export const getTransporter = async () => {
  if (!transporter) {
    const testAccount = await nodemailer.createTestAccount();
 
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: +process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
  }
 
  return transporter;
};


