import React, { useState, useEffect, useContext } from "react";
import logoHome from "../../img/LOGO-ta-listo-home-blanco.png";
import "../../styles/index.scss";

export const Home = () => {
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
				<div className="text-center p-3 logo-home">
					<img src={logoHome} />
				</div>

				<div className="buscar-orden mt-5 p-1">
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
					</form>
				</div>
			</div>
		</div>
	);
};
