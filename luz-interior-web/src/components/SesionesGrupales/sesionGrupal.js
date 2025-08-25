import React from 'react';
import '../../index.css';
import './sesionGrupal.css';

const sesiones = [
  {
    dia: "Jueves 7 PM",
    titulo: "Sesión: Técnicas de relajación",
    profesional: "con Dra. Martinez",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    dia: "Viernes 6 PM",
    titulo: "Sesión: Manejo del estrés",
    profesional: "con Dr. Rodriguez",
    imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    dia: "Sábado 10 AM",
    titulo: "Sesión: Mindfulness para principiantes",
    profesional: "con Lic. Garcia",
    imagen: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    dia: "Domingo 4 PM",
    titulo: "Sesión: Apoyo para la ansiedad",
    profesional: "con Dra. López",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  }
];

export default function SesionGrupal() {
  return (
    <div className="sesion-grupal-bg">
      <div className="sesion-grupal-container">
        <h1 className="sesion-grupal-titulo">Sesiones grupales disponibles</h1>
        <div className="sesion-grupal-lista">
          <div className="sesion-grupal-info">
            {sesiones.map((sesion, idx) => (
              <div key={idx} className="sesion-grupal-item">
                <span className="sesion-grupal-dia">{sesion.dia}</span>
                <span className="sesion-grupal-titulo-sesion">{sesion.titulo}</span>
                <span className="sesion-grupal-profesional">{sesion.profesional}</span>
                <button className="sesion-grupal-unirme">Unirme</button>
              </div>
            ))}
          </div>
          <div className="sesion-grupal-imagenes">
            {sesiones.map((sesion, idx) => (
              <img
                key={idx}
                src={sesion.imagen}
                alt={sesion.titulo}
                className="sesion-grupal-imagen"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}