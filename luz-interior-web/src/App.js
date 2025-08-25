import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import Premium from './components/Premium/Premium';
import LoginUp from './components/session/registro/loginup';
import Login from './components/session/inicio/login';
import UserNormal from './components/users/usuarioNormal/usernormal';
import UserPremium from './components/users/usuarioPremium/userpremium';
import RegistroEmociones from './components/RegistroEmociones/registroEmociones';
import ExploraComunidad from './components/Comunidad/ExploraComunidad';
import ConversacionesComunidad from './components/ComunidadApoyo/ConversacionesComunidad';
import SesionGrupal from './components/SesionesGrupales/sesionGrupal';
import SesionIndividual from './components/SesionesIndividuales/sesionIndividual';

const Home = () => (
  <>
    <Hero />
    <Benefits />
    <Premium />
  </>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/registro" element={<LoginUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/usernormal" element={<UserNormal />} />
    <Route path="/userpremium" element={<UserPremium />} />
    <Route path="/registro-emociones" element={<RegistroEmociones />} />
    <Route path="/explora-comunidad" element={<ExploraComunidad />} />
    <Route path="/conversaciones-comunidad" element={<ConversacionesComunidad />} />
    <Route path="/sesion-grupal" element={<SesionGrupal />} />
    <Route path="/sesion-individual" element={<SesionIndividual />} />
  </Routes>
);

export default App;