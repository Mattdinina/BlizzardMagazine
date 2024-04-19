import '../App.css';
import React from 'react';

function Register() {
    return (
        <form action="http://localhost:8080/users" method="POST">
            <fieldset>
                <legend>
                    Inscription
                </legend>
                <label
                >Enter your full name</label
                >
                <input type="text" name="Pseudo" />
                <label>Enter your email</label>
                <input
                    type="email"
                    name="email"
                />
                <label>Enter your password</label>
                <input
                    type="password"
                    name="password"
                />

                <label>
                    Enter your Date of
                    Birth</label>
                <input type="date" name="dob" />
                <input
                    type="submit"
                    value="submit"
                />
            </fieldset>
        </form>
    );
}

export default Register;
