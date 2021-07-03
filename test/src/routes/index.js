const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();



router.post('/send-email', (req, res) => {
    const { name, email } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
    `;

    nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '',

        }
    })
    console.log({contentHTML});
})

module.exports = router;