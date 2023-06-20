import nodemailer from "nodemailer";
import dotenv from "dotenv";

const sendEmail = async (to: string, subject: string, text: string) => {
  // Pobierz dane konfiguracyjne serwera pocztowego z pliku .env
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort: any = process.env.SMTP_PORT;
  const smtpUsername = process.env.SMTP_USERNAME;
  const smtpPassword = process.env.SMTP_PASSWORD;

  // Utwórz transporter poczty elektronicznej
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort),
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  // Utwórz opcje wiadomości e-mail
  const mailOptions = {
    from: smtpUsername,
    to,
    subject,
    text,
  };

  try {
    // Wyślij e-mail
    await transporter.sendMail(mailOptions);
    console.log("E-mail sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
