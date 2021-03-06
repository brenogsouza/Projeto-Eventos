import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand text-white font-weight-bold">
        <i className="far fa-smile-wink text-white fa-2x"></i>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ml-2">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {useSelector(state => state.usuarioLogado) === true ? (
            <>
              <li className="nav-item ml-2">
                <Link to="/cadastrar-evento" className="nav-link">
                  Publicar Evento
                </Link>
              </li>
              <li className="nav-item ml-2">
                <Link to="/eventos/meus" className="nav-link">
                  Meus Eventos
                </Link>
              </li>
              <li className="nav-item ml-2">
                <Link
                  to=""
                  className="nav-link"
                  onClick={() =>
                    dispatch({
                      type: "LOG_OUT"
                    })
                  }
                >
                  Sair
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item ml-2">
                <Link to="/cadastrar-usuario" className="nav-link">
                  Cadastrar
                </Link>
              </li>
              <li className="nav-item ml-2">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
