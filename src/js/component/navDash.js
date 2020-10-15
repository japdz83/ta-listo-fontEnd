import React from "react";
import { Link } from "react-router-dom";
import logoNav from "../../img/ta-listo-nav1-blanco.png";
import userIcon from "../../img/user-icon.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import "../../styles/index.scss";

export const NavDash = () => {
	return (
		<nav className="navbar navbar-light bg-blue">
			<div className="Logo-dash">
				<span className="navbar-brand saludo mb-0">
					<h5 className="p-1 ">Hola Ruben</h5>
				</span>
			</div>

			<div className="ml-auto row">
				<Link to="/login">
					<button className=" btn btn-danger mr-3">Cerrar Sesión</button>
				</Link>
			</div>
		</nav>
	);
};
