import React from 'react';
import './loginup.css';

const LoginUp = () => (
  <div className="session-container">
    <h2 className="session-title">Crea tu cuenta</h2>
    <form className="session-form">
      <label>Nombre</label>
      <input type="text" placeholder="Ingresa tu nombre" />
      <label>Correo electrónico</label>
      <input type="email" placeholder="Ingresa tu correo electrónico" />
      <label>Contraseña</label>
      <input type="password" placeholder="Ingresa tu contraseña" />
      <button type="submit" className="session-btn">Registrarme</button>
    </form>
    <a href="/login" className="session-link">
      ¿Ya tienes una cuenta? Inicia sesión
    </a>
  </div>
);

export default LoginUp;