import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isUserNormal =
    location.pathname === "/usernormal" ||
    location.pathname === "/conversaciones-comunidad" ||
    location.pathname === "/sesion-grupal" ||
    location.pathname === "/sesion-individual";
  const isUserPremium = location.pathname === "/userpremium";
  const isRegistroEmociones = location.pathname === "/registroemociones";
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleUserClick = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogout = () => {
    setShowLogout(false);
    navigate('/');
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <span className="logo">✹ Luz Interior</span>
        <nav>
          {(isUserNormal || isUserPremium) ? (
            <div className="header-user-menu">
              <a href='/' className="header-btn secondary">Inicio</a>
              <button className="header-notif-btn" title="Notificaciones">
                <span role="img" aria-label="notificación">🔔</span>
              </button>
              <div className="header-user-avatar-wrapper" style={{ position: 'relative' }}>
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Usuario"
                  className="header-user-avatar"
                  onClick={handleUserClick}
                  style={{ cursor: 'pointer' }}
                />
                {showLogout && (
                  <div className="logout-menu">
                    <button className="logout-btn" onClick={handleLogout}>
                      Cerrar sesión
                    </button>
                    {isUserNormal && (
                      <button
                        className="premium-btn"
                        onClick={() => {
                          setShowLogout(false);
                          navigate('/userpremium');
                        }}
                      >
                        Cambiar a premium
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : isRegistroEmociones ? (
            <div className="header-user-menu">
              <button
                className="header-home-btn"
                onClick={() => navigate('/userpremium')}
                title="Ir a inicio"
              >
                Inicio
              </button>
              <div className="header-user-avatar-wrapper" style={{ position: 'relative' }}>
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Usuario"
                  className="header-user-avatar"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          ) : (
            <>
              <a href="/usernormal" className="header-btn">Usuario Normal</a>
              <a href="/userpremium" className="header-btn secondary">Usuario premium</a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

const Root = () => (
  <Router>
    <Header />
    <App />
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

