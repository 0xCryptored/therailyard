import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_RECEIVER_TEST,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () => {
    return new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          console.error('Error sending email:', err);
          reject('Failed to send email');
        }
      });
    });
  };

  try {
    await sendMailPromise();
    return NextResponse.json({ success: true, message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}