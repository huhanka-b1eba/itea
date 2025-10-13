class FormService {
    static send = async (name, email, message) => {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
        await fetch(`${apiUrl}/send`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });
    };
}

export default FormService;
