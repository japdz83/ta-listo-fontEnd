import React from "react";
import { Link } from "react-router-dom";
import logoNav from "../../img/ta-listo-nav1-blanco.png";
import userIcon from "../../img/user-icon.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import "../../styles/index.scss";

export const NavDash = () => {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          dropdownOpen: false,
          color: "transparent",
        };
        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.sidebarToggle = React.createRef();
      }
      toggle() {
        if (this.state.isOpen) {
          this.setState({
            color: "transparent",
          });
        } else {
          this.setState({
            color: "dark",
          });
        }
        this.setState({
          isOpen: !this.state.isOpen,
        });
      }
      dropdownToggle(e) {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
        });
      }

	return (
		<nav className="navbar navbar-light bg-blue">
			<Link to="/">
				<span className="navbar-brand mb-0">
					<img src={logoNav} />
				</span>
			</Link>

			<div className="ml-auto row">
				<Link to="/login" className="dropdown">
					<Dropdown nav isOpen={this.state.dropdownOpen} toggle={e => this.dropdownToggle(e)}>
						<DropdownToggle caret nav>
							<i className="nc-icon nc-bell-55" />
							<p>
								<span className="d-lg-none d-md-block">Some Actions</span>
							</p>
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem tag="a">Action</DropdownItem>
							<DropdownItem tag="a">Another Action</DropdownItem>
							<DropdownItem tag="a">Something else here</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</Link>
			</div>
		</nav>
	);
};
