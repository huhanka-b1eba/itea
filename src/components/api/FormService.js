class FormService {
    static send = async (name, email, message) => {
        // Определяем URL API в зависимости от окружения
        const apiUrl = import.meta.env.PROD 
            ? "http://185.139.69.170" 
            : "http://localhost:3001";
        const timestamp = new Date().toISOString();
        
        console.log(`[${timestamp}] 📧 FormService: Отправка заявки`, {
            name,
            email,
            messageLength: message?.length || 0,
            apiUrl
        });
        
        try {
            const response = await fetch(`${apiUrl}/send`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            
            if (response.ok) {
                console.log(`[${timestamp}] ✅ FormService: Заявка успешно отправлена для ${name}`);
            } else {
                console.error(`[${timestamp}] ❌ FormService: Ошибка отправки - статус ${response.status}`);
                throw new Error(`HTTP ${response.status}`);
            }
            
            return response;
        } catch (error) {
            console.error(`[${timestamp}] ❌ FormService: Ошибка при отправке заявки от ${name}:`, error.message);
            throw error;
        }
    };
}

export default FormService;
