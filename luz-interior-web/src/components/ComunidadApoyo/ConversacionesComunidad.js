import React from 'react';
import './ConversacionesComunidad.css';

const conversaciones = [
  {
    titulo: "¿Cómo organizar mi día cuando me siento abrumado?",
    comentarios: 25,
  },
  {
    titulo: "Ejercicios de respiración para la ansiedad",
    comentarios: 18,
  },
  {
    titulo: "Historias de resiliencia personal",
    comentarios: 32,
  },
];

export default function ConversacionesComunidad() {
  return (
    <div className="comunidad-container">
      <h1 className="comunidad-titulo">Comunidad de apoyo</h1>
      <p className="comunidad-subtitulo">
        Conéctate con otros miembros y comparte tus experiencias.
      </p>
      <input
        className="comunidad-busqueda"
        type="text"
        placeholder="Buscar en la comunidad"
      />
      <div className="comunidad-filtros">
        <button>Recientes</button>
        <button>Más comentados</button>
        <button>Más vistos</button>
      </div>
      <h2 className="comunidad-categorias-titulo">Categorías</h2>
      <div className="comunidad-categorias">
        <button><span role="img" aria-label="ansiedad">💬</span> Ansiedad</button>
        <button><span role="img" aria-label="hábitos">🤍</span> Hábitos saludables</button>
        <button><span role="img" aria-label="estudios">📖</span> Estudios</button>
        <button><span role="img" aria-label="motivación">👥</span> Motivación</button>
        <button><span role="img" aria-label="bienestar">☀️</span> Bienestar</button>
        <button><span role="img" aria-label="naturaleza">🌴</span> Naturaleza</button>
      </div>
      <h2 className="comunidad-conversaciones-titulo">Conversaciones recientes</h2>
      <div className="comunidad-conversaciones">
        {conversaciones.map((conv, idx) => (
          <div key={idx} className="comunidad-conversacion-item">
            <span className="comunidad-conversacion-icon" role="img" aria-label="comentario">💬</span>
            <span className="comunidad-conversacion-titulo">{conv.titulo}</span>
            <span className="comunidad-comentarios">{conv.comentarios} comentarios</span>
          </div>
        ))}
      </div>
      <div className="comunidad-btn-wrapper">
        <button className="comunidad-nueva-conv-btn">Crear nueva conversación</button>
      </div>
    </div>
  );
}