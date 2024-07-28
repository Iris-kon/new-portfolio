import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

const transporter = nodemailer.createTransport({
  port: Number(process.env.MAIL_PORT),
  host: process.env.MAIL_SMTP,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
  secure: true,
})

const mailer = (email: string, name: string, message: string, pronoun?: string) => {
  const mailData = {
    from: email,
    to: process.env.USER_MAIL,
    subject: "Contato via site",
    text: `Enviado por: ${name} | Mensagem: ${message}`,
    html: `
            <p>Enviado por: ${name}</p>
            <p>Pronomes são: ${name}</p>
            <p>Email para contato: ${email}</p>
            <p>Mensagem: ${message}</p>
        `
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export async function POST(req: Request) {
  const { email, pronoun, name, message } = await req.json();

  
  //test if data is correct
  if (
    email === undefined ||
    name === undefined ||
    message === undefined 
  ) {
    console.log(email, name, message)
    return Response.json({ success: false })
  }

  const mailerRes = await mailer(email, name, pronoun, message)
  return Response.json({ mailerRes })
}