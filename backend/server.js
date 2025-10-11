import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
            from: `"Заявка с сайта" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `Новая заявка от ${name}`,
            html: `
                <p><b>Имя:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Сообщение:</b><br>${message}</p>
            `,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Ошибка при отправке письма:", error);
        res.status(500).json({ success: false });
    }
});

app.listen(3001, () => console.log("✅ Server started on port 3001"));
