import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../../img/LOGO-ta-listo-blue.png";
import "../../styles/index.scss";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [login, setLogin] = useState({
		email: "",
		pass: ""
	});

	const handleChange = event => {
		setLogin({
			...login,
			[event.target.name]: event.target.value
		});
		console.log(login);
	};

	return (
		<div className="bg">
			<div className="container">
				<div className="wrapper-form text-center mt-5">
					<div className="text-center p-3 logo-home">
						<img src={logo} />
					</div>
					<p className="text-center pt-3 pb-3"> Iniciar Sesión </p>
					<form>
						<div className="form-group col-md-6">
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="Email"
								value={login.email}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group col-md-6">
							<input
								type="password"
								className="form-control"
								name="pass"
								placeholder="Clave"
								value={login.pass}
								onChange={handleChange}
							/>
						</div>

						<div className="box-olvido">
							<a className="olvido-pass" href="#">
								Olvido de contraseña
							</a>
						</div>

						<button
							type="button"
							onClick={e => {
								actions.loginUser(login);
								history.push("/dashboard");
							}}
							className="btn btn-primary btn-register">
							Registrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
