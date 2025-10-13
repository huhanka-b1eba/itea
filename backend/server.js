import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Раздача статических файлов фронтенда
app.use(express.static(path.join(__dirname, "../public")));

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

// Маршрут для SPA (все остальные запросы)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
