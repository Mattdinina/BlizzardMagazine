import React from 'react';
import { useNavigate } from "react-router-dom";

var Logo = require('../images/a.png');
var menu = require('../images/cta-placeholder.png');
var slogan = require('../images/HERO-section-card.png');

function Accueil() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/artistes`;
        navigate(path);
    }

    return (
        <>
            <div style={{ backgroundColor: '#000', minWidth: '100vw', minHeight: '100vh' }}>
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#696969', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', zIndex: 1000 }}>
                    <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>LE MAGAZINE</span>
                    <img src={menu} alt="Menu" style={{ height: '40px' }} />
                </div>
                <div style={{ paddingTop: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img src={slogan} alt="Slogan" style={{ maxWidth: '100%', height: 'auto' }} onClick={routeChange} />
                </div>
            </div>
        </>
    );
}

export default Accueil;
