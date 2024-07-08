var nodemailer = require('nodemailer');

const MAIL_SETTINGS = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'sundigo.operations@gmail.com',
    pass: 'sstn gwus hkkl yjzf'
  }
};


// const MAIL_SETTINGS = {
//   host: 'smtp.office365.com',
//   port: 587,
//   auth: {
//     user: '',
//     pass: '',
//   },
// };


const transporter = nodemailer.createTransport(MAIL_SETTINGS);

const sendQueryEmail = async (userName, userEmail,subject, message) => {
  try {
    const msg = await transporter.sendMail({
      to: 'sundigosolars@gmail.com',
      // from: MAIL_SETTINGS.auth.user,
      from : "Sundigo solar solutions <MAIL_SETTINGS.auth.user>",
      subject: 'Contact Query',
      text: `Your Name is: ${userName} and Your Email is: ${userEmail} and Subject is: ${subject} and your message is: ${message}`,
    });
    console.log('email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const sendContactQueryEmail = async (userName, userEmail,subject, message) => {
  try {
    const wlcmHtml =`<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    </head>
    <body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">  </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td bgcolor="#fff" align="center" style="background-color:#fff;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#fff" align="center" style="padding: 0px 10px 0px 10px;background-color:#fff;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff"valign="top" style="padding: 40px 70px 20px 70px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: rubik, sans-serif; font-size: 32px; font-weight: 400; letter-spacing: 1px; line-height: 25px;">
                          <h3>Dear </h3>
                          <p style="font-size: 16px;font-family: rubik,sans-serif;"> Your login credentials are given below :</p>
                            <p style="font-size: 16px;font-family: rubik,sans-serif;" >Name: <b style="font-size:16px;font-weight: bolder;">${userName}</b>
                            <p style="font-size: 16px;font-family: rubik,sans-serif;" >Email: <b style="font-size:16px;font-weight: bolder;">${userEmail}</b>                     
                        </td>                        
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </body>
    </html>`;
    const msg = await transporter.sendMail({
      to: recipientEmail,
      from: MAIL_SETTINGS.auth.user,
      subject: '',
      html: wlcmHtml,
    });

    console.log('email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


module.exports = {
  sendQueryEmail,
  sendContactQueryEmail,
};


