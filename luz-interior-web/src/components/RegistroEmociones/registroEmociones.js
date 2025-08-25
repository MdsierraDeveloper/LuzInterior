import React from 'react';
import './registroEmociones.css';
import grafico from '../../assets/grafico.png';

const reflexiones = [
  {
    fecha: "15 de Julio",
    texto: "Hoy me sentí muy agradecida por el apoyo de mis amigos. Su presencia me da mucha fuerza.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    fecha: "12 de Julio",
    texto: "Tuve un día desafiante en el trabajo, pero logré superar los obstáculos con calma y determinación.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
  },
  {
    fecha: "8 de Julio",
    texto: "Me sentí un poco ansiosa hoy, pero practiqué la meditación y me ayudó a relajarme.",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
  }
];

const RegistroEmociones = () => {
  return (
    <div className="emociones-container">
      <h1 className="emociones-title">Tu evolución emocional</h1>

      <section className="emociones-calendario">
        <div className="calendario-header">
          <span className="cal-arrow">{'<'}</span>
          <span className="cal-month">Julio 2024</span>
          <span className="cal-month">Agosto 2024</span>
          <span className="cal-arrow">{'>'}</span>
        </div>
        <div className="calendario-grid">
          {/* Puedes reemplazar esto por un componente de calendario real si lo deseas */}
          <div className="cal-col">
            <div className="cal-days">S M T W T F S</div>
            <div className="cal-numbers">1 2 3 4 5 6 7<br/>8 9 10 11 12 13 14<br/>15 16 17 18 19 20 21<br/>22 23 24 25 26 27 28<br/>29 30</div>
          </div>
          <div className="cal-col">
            <div className="cal-days">S M T W T F S</div>
            <div className="cal-numbers">1 2 3 4 5 6 7<br/>8 9 10 11 12 13 14<br/>15 16 17 18 19 20 21<br/>22 23 24 25 26 27 28<br/>29 30</div>
          </div>
        </div>
      </section>

      <section className="emociones-grafico">
        <h2>Tendencias Semanales</h2>
        <div className="grafico-info">
          <span className="grafico-title">Emociones Semanales</span>
          <span className="grafico-promedio">Promedio: <b>3.5</b></span>
          <span className="grafico-cambio">Semana Actual <span style={{color: "#23a6a6"}}>+10%</span></span>
        </div>
        <div className="grafico-img">
          <img src={grafico} alt="Gráfico emocional" />
        </div>
        <div className="grafico-labels">
          <span>Lun</span>
          <span>Mar</span>
          <span>Mié</span>
          <span>Jue</span>
          <span>Vie</span>
          <span>Sáb</span>
          <span>Dom</span>
        </div>
      </section>

      <section className="emociones-reflexiones">
        <h2>Reflexiones Diarias</h2>
        <div className="reflexiones-list">
          {reflexiones.map((r, idx) => (
            <div className="reflexion-card" key={idx}>
              <img src={r.img} alt={r.fecha} className="reflexion-bg" />
              <div className="reflexion-text">
                <div className="reflexion-fecha">{r.fecha}</div>
                <div className="reflexion-desc">{r.texto}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="emociones-btn">Registrar nueva emoción</button>
    </div>
  );
};

export default RegistroEmociones;