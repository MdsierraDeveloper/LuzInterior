import React from 'react';
import './Premium.css';

const Premium = () => (
  <section className="premium">
    <h2>Hazte Premium y cuida tu bienestar día a día</h2>
    <p>
      Con la versión Premium tendrás seguimiento diario de tus emociones y acceso a consultas personalizadas y sesiones de apoyo profesional.
    </p>
    <div className="premium-card">
      <div>
        <span className="premium-title">Premium</span>
        <span className="premium-price">9.99 <small>/mes</small></span>
      </div>
      <button className="primary-btn">Suscríbete ahora</button>
      <ul>
        <li>Seguimiento diario de emociones</li>
        <li>Consultas personalizadas</li>
        <li>Sesiones de apoyo profesional</li>
      </ul>
    </div>
    <span className="secure-pay">Pago seguro</span>
  </section>
);

export default Premium;