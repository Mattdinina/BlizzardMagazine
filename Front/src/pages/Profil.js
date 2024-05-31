import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profil() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://164.92.244.79:8080/users/modify-password', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ password })
            });
            const data = await response.json();

            if (response.ok) {
                setMessage('Mot de passe changé !');
            } else {
                setMessage('Erreur : Mot de passe inchangé');
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    async function logout() {
        try {
            const token = localStorage.getItem("token")
            const response = await fetch('http://164.92.244.79:8080/auth/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })

            if (response.ok) {
                setMessage('Vous êtes bien déconnecté !')
                setTimeout(() => {
                    navigate('/accueil');
                }, 1500);
            }
            else {
                setMessage('Echec de la déconnexion')
            }
        }
        catch (error) {
            setMessage(error.message)
        }
    }
    return (
        <>
            <div>Changer votre mot de passe :</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="submit"
                    value="Changer Mot de passe"
                />
            </form>
            {message && <p>{message}</p>}

            <button onClick={logout}>Se déconnecter :</button>
            {message && <p>{message}</p>}
        </>
    );
}
