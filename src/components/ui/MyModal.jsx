import React, { useEffect, useState } from 'react';
import MyButton from './MyButton.jsx';
import FormService from '../api/FormService.js';

const MyModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => (document.body.style.overflow = '');
    }, [isOpen]);

    const validate = () => {
        if (!name.trim() || !email.trim() || !message.trim()) {
            setErrorMsg('Пожалуйста, заполните все поля.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMsg('Некорректный email.');
            return false;
        }
        setErrorMsg('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('sending');
        try {
            await FormService.send(name, email, message);
            setStatus('success');

            // Очистка полей через короткую задержку
            setTimeout(() => {
                setName('');
                setEmail('');
                setMessage('');
                setStatus('idle');
                onClose();
            }, 1200); // закрытие через 1.2 секунды после подтверждения
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 2000);
        }
    };

    const renderButtonText = () => {
        switch (status) {
            case 'sending': return 'Отправка... ⏳';
            case 'success': return 'Отправлено ✅';
            case 'error': return 'Ошибка ❌';
            default: return 'Отправить';
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={onClose}
        >
            <div
                className={`relative bg-[#0f0f0f] border border-white/20 rounded-3xl p-8 w-[90%] max-w-[420px] shadow-[0_0_40px_rgba(255,255,255,0.1)] transform transition-all duration-300 ${
                    isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-5 opacity-0'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-5 text-white text-[38px] font-light hover:rotate-90 hover:text-[#FFB129] transition-all duration-300"
                >
                    ×
                </button>

                <h2 className="text-[28px] text-center mb-6 instrument_sans--medium uppercase">
                    Оставить заявку
                </h2>

                {errorMsg && (
                    <p className="text-red-500 text-center mb-2">{errorMsg}</p>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/70 transition"
                        required
                        disabled={status === 'sending'}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/70 transition"
                        required
                        disabled={status === 'sending'}
                    />
                    <textarea
                        placeholder="Расскажите о проекте"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-transparent border border-white/30 rounded-xl px-4 py-3 h-[100px] resize-none text-white placeholder-white/50 focus:outline-none focus:border-white/70 transition"
                        required
                        disabled={status === 'sending'}
                    />
                    <MyButton type="submit" className="mx-auto w-full mt-2" disabled={status === 'sending'}>
                        <span className="mx-auto">{renderButtonText()}</span>
                    </MyButton>
                </form>
            </div>
        </div>
    );
};

export default MyModal;
