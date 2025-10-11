class FormService {
    static send = async (name, email, message) => {
        await fetch("http://localhost:3001/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });
    };
}

export default FormService;
