import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploraComunidad.css';

const comunidad = [
  {
    icon: "👥",
    texto: "Cómo manejar la ansiedad en los estudios"
  },
  {
    icon: "📝",
    texto: "Rutinas diarias para mejorar tu ánimo"
  },
  {
    icon: "🌱",
    texto: "Historias de superación personal"
  }
];

const ExploraComunidad = () => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate('/conversaciones-comunidad');
  };

  return (
    <section className="explora-comunidad">
      <h2>Explora la comunidad</h2>
      <ul>
        {comunidad.map((item, idx) => (
          <li key={idx} onClick={handleItemClick} style={{ cursor: 'pointer' }}>
            <span className="comunidad-icon">{item.icon}</span>
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExploraComunidad;