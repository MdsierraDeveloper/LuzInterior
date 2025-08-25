import React, { useState } from 'react';
import './sesionIndividual.css';

const especialistas = [
  {
    nombre: "Dra. Sofía Ramírez",
    descripcion: "Psicóloga clínica especializada en terapia cognitivo-conductual para adultos y adolescentes. Amplia experiencia en el tratamiento de ansiedad y depresión.",
    imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Dr. Javier Morales",
    descripcion: "Psiquiatra con enfoque en terapia familiar y de pareja. Especialista en trastornos del estado de ánimo y adicciones.",
    imagen: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Lic. Elena Vargas",
    descripcion: "Terapeuta con máster en psicología infantil y del desarrollo. Experta en el manejo de problemas de conducta y aprendizaje en niños.",
    imagen: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"
  }
];

const meses = [
  { nombre: "Julio 2024", dias: 31 },
  { nombre: "Agosto 2024", dias: 31 }
];

function Calendario({ mes, seleccionado, setSeleccionado }) {
  return (
    <div className="calendario-mes">
      <div className="calendario-mes-titulo">{mes.nombre}</div>
      <table className="calendario-tabla">
        <thead>
          <tr>
            <th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, semanaIdx) => (
            <tr key={semanaIdx}>
              {Array.from({ length: 7 }).map((_, diaIdx) => {
                const dia = semanaIdx * 7 + diaIdx + 1;
                return dia <= mes.dias ? (
                  <td
                    key={diaIdx}
                    className={seleccionado === `${mes.nombre}-${dia}` ? "calendario-dia calendario-dia-activo" : "calendario-dia"}
                    onClick={() => setSeleccionado(`${mes.nombre}-${dia}`)}
                  >
                    {dia}
                  </td>
                ) : <td key={diaIdx}></td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SesionIndividual() {
  const [seleccionados, setSeleccionados] = useState([`${meses[0].nombre}-5`, `${meses[0].nombre}-5`, `${meses[0].nombre}-5`]);

  return (
    <div className="sesion-individual-bg">
      <div className="sesion-individual-container">
        <h1 className="sesion-individual-titulo">Reserva tu sesión individual</h1>
        {especialistas.map((esp, idx) => (
          <div key={idx} className="sesion-individual-bloque">
            <div className="sesion-individual-info">
              <div>
                <div className="sesion-individual-nombre">{esp.nombre}</div>
                <div className="sesion-individual-descripcion">{esp.descripcion}</div>
                <button className="sesion-individual-btn">
                  <span role="img" aria-label="calendar">📅</span> Reservar cita
                </button>
              </div>
              <img src={esp.imagen} alt={esp.nombre} className="sesion-individual-img" />
            </div>
            <div className="sesion-individual-calendarios">
              <div className="calendario-nav">
                <span className="calendario-nav-arrow">{'<'}</span>
                <Calendario
                  mes={meses[0]}
                  seleccionado={seleccionados[idx]}
                  setSeleccionado={sel => {
                    const nuevo = [...seleccionados];
                    nuevo[idx] = sel;
                    setSeleccionados(nuevo);
                  }}
                />
                <Calendario
                  mes={meses[1]}
                  seleccionado={seleccionados[idx]}
                  setSeleccionado={sel => {
                    const nuevo = [...seleccionados];
                    nuevo[idx] = sel;
                    setSeleccionados(nuevo);
                  }}
                />
                <span className="calendario-nav-arrow">{'>'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}