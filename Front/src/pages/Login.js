import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pseudo, password }),
            });

            const data = await response.json();

            if (response.ok && data.access_token) {
                setMessage('Connexion réussie!');
                // Stocker le jeton JWT (par exemple, dans le localStorage)
                localStorage.setItem('token', data.access_token);
                setTimeout(() => {
                    navigate('/profil');
                }, 1000); // Redirige après 1 seconde
            } else {
                setMessage('Échec de la connexion.');
            }
        } catch (error) {
            setMessage(error.message); // Utilisez error.message pour afficher un message d'erreur lisible
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Entrer votre pseudo</label>
                <input
                    type="text"
                    name="pseudo"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                />
                <label> Entrer votre mot de passe</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="submit"
                    value="Se connecter"
                />
            </form>
            {message && <p>{message}</p>}
        </>
    );
}
