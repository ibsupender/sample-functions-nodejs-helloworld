import nodemailer from "nodemailer";

export async function main(args) {

  const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "3dfdcc9f7e4e91",
        pass: "36aa165b8b7814",
      },
    });
  
    // 2. Email details
    const mailOptions = {
      from: '"Your Name" <your-email@gmail.com>',
      to: "recipient@example.com",
      subject: "Test Email from Node.js",
      text: "Hello from Node.js using Nodemailer!",
      html: "<b>Hello from Node.js using Nodemailer!</b>",
    };
  
    // 3. Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent:", info.messageId);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent" }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }),
      };
    }

};