import '../register.css';
import React from 'react';

function Register() {
    return (
        <form action="http://localhost:8080/users" method="POST">
            <fieldset>
                <legend>Inscription</legend>
                <label>Entrez votre pseudo</label>
                <input type="text" name="Pseudo" />
                <label>Entrez votre email</label>
                <input type="email" name="email" />
                <label>Entrez votre mot de passe</label>
                <input type="password" name="password" />
                <label>Entrez votre date de naissance</label>
                <input type="date" name="dob" />
                <input type="submit" value="submit" />
            </fieldset>
        </form>
    );
}

export default Register;
