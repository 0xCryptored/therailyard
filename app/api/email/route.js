import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { email, name, lastname, eventDate, eventSize, phone, survey, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_RECEIVER,
    subject: `Message from ${name} on The Railyard Website`,
    text: `Hello! You've received a new message from The Railyard Contact form. This one is from → ${name} ${lastname}; email: ${email}`,
    html: `
    <h4>New Message fron The Railyard Website</h3>
    <ul>
    <li>Name: ${name}</li>
    <li>Lastname: ${lastname}</li>
    <li>Email: ${email}</li>
    <li>Phone: ${phone}</li>
    <li>Event Date: ${eventDate}</li>
    <li>Event Size: ${eventSize}</li>
    <li>Where did ${name} heard from us?: ${survey}</li>
    </ul>
    <h4>Message:</h4>
    <p>${message}</p>
    `,
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