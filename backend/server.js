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
// Настройка CORS
const corsOptions = {
    origin: [
        'http://iteadev.ru',
        'https://iteadev.ru',
        'http://localhost:3001'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(express.json());

// Обработка preflight запросов
app.options('/*', cors(corsOptions));

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
    
    console.log(`[${new Date().toISOString()}] 📧 Получена заявка:`, {
        name,
        email,
        messageLength: message?.length || 0,
        userAgent: req.get('User-Agent'),
        origin: req.get('Origin')
    });

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

        console.log(`[${new Date().toISOString()}] ✅ Письмо успешно отправлено для ${name}`);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(`[${new Date().toISOString()}] ❌ Ошибка при отправке письма для ${name}:`, error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Маршрут для SPA (все остальные запросы)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
