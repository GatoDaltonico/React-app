import React from 'react';

function About() {
    return (
        <div className="about-container">
            <h1>Acerca de mí</h1>
            <div className="info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_A3YiErS1yDsS0twnePGdPSPlmQc_NiyAKN8AnLaqzQ&s" alt="Un logo de michi" />
                <div className="details">
                    <p><strong>Nombre:</strong> Verónica Chávez</p>
                    <p><strong>Correo/Contacto:</strong> veronicachgd@gmail.com</p>
                    <p><strong>Descripción:</strong> Soy un michi con acceso a una red pública de la CDMX</p>
                </div>
            </div>
        </div>
    );
}

export default About;
