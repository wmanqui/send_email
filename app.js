const nodemailer = require('nodemailer');

enviarMail = async () => {
    
    const config = {
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        secure: false,
        auth: {
          user: "7a9311e08dc370",
          pass: "824ad3f9d27283"
        }
    }    
    const mensaje = {
        from: 'wmanqui@gmail.com',
        to: 'pepito@gadorcha.com',
        subject: 'Test de envio de email',
        text: 'Hola Mundo',
        html: '<b>Hello world</b>',
    }

    const transport  = nodemailer.createTransport(config)
    const info = await transport.sendMail(mensaje);

    console.log(info);
}

enviarMail()