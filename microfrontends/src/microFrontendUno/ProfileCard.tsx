// src/microFrontendUno/ProfileCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate de react-router-dom

interface ProfileCardProps {
    imageUrl: string;
    name: string;
    description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, description }) => {
    const navigate = useNavigate(); // Hook para manejar la navegación

    // Función para manejar el clic en el botón
    const handleContactClick = () => {
        // Navegar a la ruta del formulario de contacto
        navigate(`/contact/${name}`); // Cambiado de push a navigate
    };

    return (
        <div className='profile-card'>
            <img src={imageUrl} alt={`Perfil de ${name}`} />
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={handleContactClick}>Contactar</button>
        </div>
    );
};

export default ProfileCard;
