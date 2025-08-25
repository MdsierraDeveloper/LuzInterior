import React from 'react';
import './userpremium.css';

import grafico from '../../../assets/grafico.png';
import ExploraComunidad from '../../Comunidad/ExploraComunidad';
import { useNavigate } from 'react-router-dom';

const UserPremium = () => {
  const navigate = useNavigate();

  return (
    <div className="premium-container">
      <section className="premium-hero">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
          alt="Bienestar emocional"
          className="premium-hero-img"
        />
        <div className="premium-hero-text">
          <h1>
            Tus emociones no te definen, pero sí pueden guiarte hacia el cambio.
          </h1>
          <p>Encuentra tu camino hacia el bienestar emocional.</p>
        </div>
      </section>

      <section className="premium-grafico">
        <h2>Tu seguimiento emocional diario</h2>
        <div className="grafico-card">
          <div className="grafico-info">
            <span className="grafico-title">Emociones Semanales</span>
            <span className="grafico-promedio">Promedio: <b>3.5</b></span>
            <span className="grafico-cambio">Última semana <span style={{color: "#23a6a6"}}>+10%</span></span>
          </div>
          <div className="grafico-img">
            <img src={grafico} alt="Gráfico emocional" />
          </div>
          <div className="grafico-emocion">
            <span role="img" aria-label="feliz">😊</span> Feliz
          </div>
          <button
            className="premium-main-btn grafico-btn"
            onClick={() => navigate('/registro-emociones')}
          >
            Registrar emoción de hoy
          </button>
        </div>
      </section>

      <ExploraComunidad />

      <section className="premium-group">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80"
          alt="Sesión grupal"
          className="premium-group-img"
        />
        <div className="premium-group-text">
          <h2>
            Participa en sesiones grupales de apoyo y comparte experiencias con otros.
          </h2>
          <button className="premium-main-btn" onClick={() => navigate('/sesion-grupal')}>Unirme a una sesión grupal</button>
        </div>
      </section>

      <section className="premium-individual">
        <img
          src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80"
          alt="Sesión individual"
          className="premium-individual-img"
        />
        <div className="premium-individual-text">
          <h2>
            Accede a sesiones individuales con profesionales de la salud mental para recibir apoyo personalizado.
          </h2>
          <button className="premium-main-btn" onClick={() => navigate('/sesion-individual')} >Reservar sesión individual</button>
          
        </div>
      </section>
    </div>
  );
};

export default UserPremium;