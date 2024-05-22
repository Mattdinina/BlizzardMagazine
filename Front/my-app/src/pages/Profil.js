// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export default function Profil() {
    return (
        <> <div>Changer votre mot de passe :</div>
            <form action="http://localhost:8080/users/modify-password">
                <input type="text"></input>
            </form>
        </>)
}