import React from "react";
import { Link } from "react-router-dom";
import logoNav from "../../img/ta-listo-nav1.png";
import "../../styles/index.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0">
					<img src={logoNav} />
				</span>
			</Link>
			<Link to="/HowDoes">
				<a className="nav-link">Como Funciona</a>
			</Link>
			<Link to="/contact">
				<a className="nav-link">Contacto</a>
			</Link>

			<div className="ml-auto row">
				<Link to="/register">
					<a className="nav-link">Registrarse</a>
				</Link>
				<Link to="/login">
					<a className="nav-link">Inicio de Sesión</a>
				</Link>
			</div>
		</nav>
	);
};
