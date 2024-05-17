import React from 'react';

export default function Login() {
    return (
        <>
            <form>
                <label> Entrer votre pseudo</label>
                <input type="text" name="pseudo"></input>
                <label> Entrer votre mot de passe</label>
                <input type="text" name="password"></input>
                <input
                    type="submit"
                    value="Se connecter"
                />
            </form>
        </>
    )
}