const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.EMAIL_API);

const sendRegisterStatus = async (req, res) => {
    const { courseName, email } = req.body;

    try {
        const response = await resend.emails.send({
            from: 'onboarding@resend.dev', // Your verified Resend email
            to: email,
            subject: "To inform the status of your registration",
            html: `
                <p>You are successfully registered for ${courseName}.</p>
                <button style="
                    background-color: #007bff;
                    color: white; 
                    border: none; 
                    padding: 10px 20px; 
                    text-align: center; 
                    text-decoration: none; 
                    display: inline-block; 
                    font-size: 16px;
                    margin: 10px 2px; 
                    cursor: pointer; 
                    border-radius: 5px; 
                ">
                    <a href="http://localhost:3000/user_profile" style="color: white; text-decoration: none;">Click here to view your registration</a>
                </button>
            `
        });
        console.log('Resend API response:', response);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
}

module.exports = { sendRegisterStatus };
