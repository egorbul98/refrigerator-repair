import nodemailer from 'nodemailer';
import { env } from '../config';
import { getEmailTemplate } from './get-email-template';

export async function sendEmail({ name, phone }: { phone?: string; name?: string }) {
    const transporter = nodemailer.createTransport(
        {
            // @ts-ignore
            pool: true,
            host: env.EMAIL_CONFIG_HOST,
            port: env.EMAIL_CONFIG_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: env.EMAIL_FROM_USER,
                pass: env.EMAIL_FROM_APP_PASS,
            },
        },
        {
            to: [env.EMAIL_TO],
            from: `Холодильник Отремонтирович <${env.EMAIL_FROM_USER}>`,
        },
    );

    const info = await transporter.sendMail({
        subject: 'Нужен мастер по братски',
        html: getEmailTemplate({ name, phone }),
    });

    console.log('Message sent: %s', info);
}
