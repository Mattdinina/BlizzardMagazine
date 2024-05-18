import React from 'react';
import '../mystyle/artiste.css'; // Assurez-vous d'importer votre fichier CSS

const artistData = [
    { name: "Damso", image: require('../images/UI-frame-black-end1.png') },
    { name: "Pierre", image: require('../images/UI-bento-card3.png') },
    { name: "Naiva", image: require('../images/UI-bento-card2.png') }
];

const voir_conseils = require('../images/voir_conseils.png'); // Le bon chemin pour l'image

function Artistes() {
    return (
        <div className="artistes-page">
            <div className="button-container">
                <div className="nav-buttons">
                    <button className="button active">Artistes</button>
                    <button className="button">Genres</button>
                    <button className="button">Exclusifs</button>
                </div>
                <div className='auth'>
                    <a href='http://localhost:3000/login'>
                        <button className="button">Login</button>
                    </a>
                    <a href="http://localhost:3000/register">
                        <button className="button">Register</button>
                    </a>
                </div>
            </div>
            <div className="content">
                <div className="artist-cards-wrapper">
                    <div className="artist-card-large">
                        <img src={artistData[0].image} alt={artistData[0].name} className="artist-image-large" />
                    </div>
                    <div className="artist-card-small-wrapper">
                        <div className="artist-card-small">
                            <img src={artistData[1].image} alt={artistData[1].name} className="artist-image-small" />
                        </div>
                        <div className="artist-card-small">
                            <img src={artistData[2].image} alt={artistData[2].name} className="artist-image-small" />
                        </div>
                    </div>
                </div>
                <button className="voir-artistes-button">VOIR ARTISTES</button>
                <div className="text-content">
                    <div className="Carriere">
                        Développez votre carrière musicale à Lyon.
                    </div>
                    <div className="Contenu">
                        - Contenu exclusif pour émerger dans la production sonore.
                    </div>
                    <div className="description">
                        Que vous soyez un artiste en herbe, un mélomane ou un professionnel de l'industrie,<br /> Blizzard Magazine est votre
                        destination unique pour découvrir, partager et cultiver votre passion pour la musique.
                    </div>
                    <button className="voir-conseils-button">
                        <img src={voir_conseils} alt="Voir Conseils" className="button-icon" />
                        <span className="button-text"></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Artistes;
