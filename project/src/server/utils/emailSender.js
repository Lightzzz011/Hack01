import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password',  // Replace with your email password
    },
});

export const sendOtpEmail = (email, otp) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP for Signup',
        text: `Your OTP is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error('Failed to send OTP email:', error);
        } else {
            console.log('OTP email sent successfully');
        }
    });
};