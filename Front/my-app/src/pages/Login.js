import React from 'react';

function Login() {
    return (
        <>
            <form>
                <label> Entrer votre pseudo</label>
                <input type="text" name="pseudo"></input>
                <label> Entrer votre mot de passe</label>
                <input type="text" name="password"></input>
            </form>
        </>
    )
}