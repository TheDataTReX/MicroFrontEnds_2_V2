// src/Contact/ContactForm.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

const ContactForm: React.FC = () => {
    const { name } = useParams<{ name: string }>();

    // Lógica para manejar la presentación del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implementa lo que debe ocurrir cuando se envía el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Contactar a {name}</h1>
            {/* Agrega los campos de formulario que necesites */}
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu email" required />
            <textarea placeholder="Tu mensaje" required></textarea>
            <button type="submit">Enviar Mensaje</button>
        </form>
    );
};

export default ContactForm;
