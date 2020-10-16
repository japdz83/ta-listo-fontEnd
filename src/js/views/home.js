import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import logoHome from "../../img/LOGO-ta-listo-home-blanco.png";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [search, setSearch] = useState({
		buscar: ""
	});

	const handleChange = event => {
		setSearch({
			...search,
			[event.target.name]: event.target.value
		});
		console.log(search);
	};

	return (
		<div className="bg text-center">
			<div className="container p-5">
				<div className="text-center p-1 mt-4 logo-home">
					<img src={logoHome} />
				</div>

				<div className="buscar-orden mt-2 p-1">
					<form>
						<div className="form-group ">
							<input
								type="search"
								className="form-control"
								name="buscar"
								placeholder="Buscar Orden"
								value={search.buscar}
								onChange={handleChange}
							/>
						</div>
						<button
							type="button"
							onClick={e => {
								actions.searchingCustomer(search);
								history.push("/resultado");
							}}
							className="btn btn-primary btn-register">
							Buscar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
