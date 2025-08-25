import React from 'react';
import './Benefits.css';

const Benefits = () => (
  <section className="benefits">
    <h2>Beneficios de ser usuario gratuito</h2>
    <div className="benefits-list">
      <div className="benefit-card">
        <span>💬</span>
        <p>Accede a frases motivacionales diarias.</p>
      </div>
      <div className="benefit-card">
        <span>👥</span>
        <p>Conéctate con una comunidad de apoyo seguro.</p>
      </div>
    </div>
  </section>
);

export default Benefits;