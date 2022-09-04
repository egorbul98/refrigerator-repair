import nodemailer from 'nodemailer';

interface Props {
    phone?: string;
    name?: string;
}

const from = '"Fred Foo 👻" <foo@example.com>',
    text = 'Нужен мастер по братски',
    to = 'bar@example.com',
    subject = 'Нужен мастер по братски';

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail({ name, phone }: Props) {
    console.log('AAAAAA', name, phone);

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: testAccount.user, // generated ethereal user
    //         pass: testAccount.pass, // generated ethereal password
    //     },
    // });

    // // send mail with defined transport object
    // const info = await transporter.sendMail({
    //     from, // sender address
    //     to, // list of receivers
    //     text, // plain text body
    //     subject, // Subject line
    //     html: renderHtml({ name, phone }), // html body
    // });

    // console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

function renderHtml({ name, phone }: Props) {
    return `
    Вызов мастера


    <b>${name}</b>
    <b>${phone}</b>`;
}
