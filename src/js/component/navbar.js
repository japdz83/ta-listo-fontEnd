import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> {"Ta'Listo"}</span>
			</Link>
			<Link to="/demo">
				<button className="btn btn-primary">Check the Context in action</button>
			</Link>

			<div className="ml-auto">
				<Link to="/register">
					<a className="nav-link">Registrarse</a>
				</Link>
			</div>
		</nav>
	);
};
