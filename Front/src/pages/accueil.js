import React from 'react';
import { useNavigate } from "react-router-dom";
import '../mystyle/accueil.css'; // Assurez-vous d'importer votre fichier CSS

var Logo = require('../images/a.png');
var slogan = require('../images/HERO-section-card.png');

function Accueil() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/artistes`;
        navigate(path);
    }

    return (
        <>
            <div className="accueil-page">
                <div className="navbar">
                    <img src={Logo} alt="Logo" className="logo" />
                    <span className="magazine-title">LE MAGAZINE</span>
                    <div className="auth-buttons">
                        <a href="http://localhost:3000/login"><button>Login</button></a>
                        <a href="http://localhost:3000/register"><button>Register</button></a>
                    </div>
                </div>
                <div className="content">
                    <img src={slogan} alt="Slogan" className="slogan" onClick={routeChange} />
                </div>
            </div>
        </>
    );
}

export default Accueil;
