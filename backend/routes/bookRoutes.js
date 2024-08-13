const express = require('express');
const router = express.Router();
const BookCall = require('../models/BookCall');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: '',
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

router.post('/book', async (req, res) => {
  try {
    const { name, email, phone, date, time } = req.body;

    const newBookCall = new BookCall({
      name,
      email,
      phone,
      date,
      time,
    });

    await newBookCall.save();

    const params = {
      Source: 'test@finwiseschool.com',
      Destination: {
        ToAddresses: [email],
        CcAddresses: ['finwise-cc@finwiseschool.com'], 
      },
      Message: {
        Subject: { Data: 'Call Booking Confirmation' },
        Body: {
          Text: {
            Data: `Hello ${name},\n\nYour call has been successfully booked for ${date} at ${time}.\n\nThank you!`,
          },
        },
      },
    };

    ses.sendEmail(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
        return res.status(500).json({ message: 'Email sending failed', error: err });
      } else {
        console.log(`Email sent: ${data.MessageId}`);
        res.status(201).json({ message: 'Call booked successfully and email sent!' });
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;
