import React from 'react';
import './usernormal.css';


import Premium from '../../Premium/Premium';
import Hero from '../../Hero/Hero';
import ExploraComunidad from '../../Comunidad/ExploraComunidad';

const UserNormal = () => (
  <div className="usuario-normal-container">
    <h1 className="bienvenida">Bienvenido, Sofía</h1>
    <Hero showLoginButton={false} />
    <ExploraComunidad />
    <Premium />
    <footer className="usuario-footer">
      <a >Términos de Servicio</a>
      <a >Política de Privacidad</a>
      <a >Contacto</a>
      <div className="usuario-copyright">
        ©2024 Luz Interior. Todos los derechos reservados.
      </div>
    </footer>
  </div>
);

export default UserNormal;