import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/usernormal');
  };

  return (
    <div className="session-container">
      <h2 className="session-title">Iniciar sesión</h2>
      <form className="session-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit" className="session-btn">Iniciar sesión</button>
      </form>
      <a href="/recuperar" className="session-link">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  );
};

export default Login;