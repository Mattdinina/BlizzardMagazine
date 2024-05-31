import React, { useState } from 'react';

export default function SignupProfessionnel() {
    const [Pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // Nouvel état pour le message

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://164.92.244.79:8080/users/advertiser', {
                method: 'POST', // Corrigé la méthode
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Pseudo, email, password }) // Corrigé la clé 'body'
            });

            if (response.ok) {
                setMessage('Compte créé avec succès!');
            } else {
                const errorData = await response.json();
                setMessage(`Erreur: ${errorData.message}`);
            }
        } catch (error) {
            setMessage(`Erreur: ${error.message}`);
        }
    };

    return (
        <div className="signup-form">
            <h1>Création Compte Pro</h1>
            <form onSubmit={handleSubmit}>
                <label>Nom d'utilisateur</label>
                <input
                    type="text"
                    name="Pseudo"
                    value={Pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Mot de passe</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="S'enregistrer" />
            </form>
            {message && <p>{message}</p>} {/* Affichage du message */}
        </div>
    );
}
