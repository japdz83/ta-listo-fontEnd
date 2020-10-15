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
			<Link to="/">
				<span className="navbar-brand mb-0">
					<img src={logoNav} />
				</span>
			</Link>

			<div className="ml-auto row">
				<Link to="/login" className="dropdown">
					<DropdownButton id="dropdown-basic-button" title={<img src={logoNav} />}>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</DropdownButton>
				</Link>
			</div>
		</nav>
	);
};
