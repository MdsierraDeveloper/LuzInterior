import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = ({ showLoginButton = true }) => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>La depresión es real, pero no estás solo.</h1>
      <p>
        La depresión afecta a millones de personas en el mundo. Nuestro objetivo es acompañarte con herramientas digitales, motivación y apoyo profesional.
      </p>
      {showLoginButton && (
        <button className="primary-btn" onClick={() => navigate('/login')}>
          Inicia sesión para comenzar
        </button>
      )}
    </section>
  );
};

export default Hero;