const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
const { name, email, message } = req.body;

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Ou tout autre service de messagerie que vous utilisez
    auth: {
    user: 'votre@email.com', // Votre adresse e-mail
    pass: 'votre-mot-de-passe', // Votre mot de passe ou mot de passe d'application
    },
});

const mailOptions = {
    from: 'votre@email.com',
    to: 'destinataire@example.com', // L'adresse e-mail du destinataire
    subject: 'Nouveau message de formulaire de contact',
    text: `Nom: ${name}\nE-mail: ${email}\nMessage: ${message}`,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    console.error(error);
    res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
    } else {
    console.log('E-mail envoyé : ' + info.response);
    res.status(200).send('E-mail envoyé avec succès.');
    }
});
});

app.listen(3001, () => {
console.log('Serveur en cours d\'exécution sur le port 3001');
});
