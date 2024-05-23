import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../mystyle/signup.css'; // Assurez-vous d'importer votre fichier CSS

export default function Signup() {
    const navigate = useNavigate();

    const handleParticulierClick = (e) => {
        e.preventDefault();
        navigate('/register');
    };

    const handleProfessionnelClick = (e) => {
        e.preventDefault();
        navigate('/signup_pro');
    };

    return (
        <>
            <div>
                <div className='haut-de-page'>
                    <h1>CRÉATION COMPTE</h1>
                    <p><a href="/login">Se connecter ?</a></p>
                </div>
                <div className="signup-container">
                    <div className="account-type-selection">
                        <button onClick={handleParticulierClick} className="particulier-button">
                            <span className="icon">👤</span> {/* Placeholder for an icon */}
                            <div>PARTICULIER</div>
                            <small>Collaborations - Montages - Interviews Réalisations - Press - Articles - Video</small>
                        </button>
                        <button onClick={handleProfessionnelClick} className="professionnel-button">
                            <span className="icon">🏢</span> {/* Placeholder for an icon */}
                            <div>PROFESSIONNEL</div>
                            <small>...</small> {/* Ajoutez les détails pertinents pour les professionnels */}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
