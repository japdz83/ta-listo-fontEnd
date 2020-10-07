import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Navbar } from "../component/navbar";

export const Register = () => {
	const [register, setRegister] = useState({
		nombre: "",
		rsocial: "",
		rif: "",
		rubro: "",
		email: "",
		pass: "",
		direccion: ""
	});

	const handleChange = event => {
		setRegister({
			...register,
			[event.target.name]: event.target.value
		});
		console.log(register);
	};

	return (
		<div className="bg">
			<div className="container">
				<div className="wrapper-form text-center mt-5">
					<h2 className="logo-register">LOGO</h2>
					<p className="text-center pt-3 pb-3"> Registrarse </p>
					<form>
						<div className="form-group col-md-6">
							<input
								type="text"
								className="form-control"
								name="nombre"
								placeholder="Nombre"
								value={register.nombre}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group col-md-6">
							<input
								type="text"
								className="form-control"
								name="rsocial"
								placeholder="Razón Social"
								value={register.rsocial}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group col-md-6">
							<input
								type="text"
								className="form-control"
								name="rif"
								placeholder="RIF"
								value={register.rif}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group col-md-6">
							<input
								type="text"
								className="form-control"
								name="rubro"
								placeholder="Rubro"
								value={register.rubro}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group col-md-6">
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="Email"
								value={register.email}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group col-md-6">
							<input
								type="password"
								className="form-control"
								name="pass"
								placeholder="Clave"
								value={register.pass}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group col-md-6">
							<input
								type="text"
								className="form-control"
								name="adress"
								placeholder="Dirección"
								value={register.direccion}
								onChange={handleChange}
							/>
						</div>

						<button type="submit" className="btn btn-primary btn-register">
							Registrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
