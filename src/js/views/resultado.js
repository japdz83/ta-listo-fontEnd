import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Navbar } from "../component/navbar";

export const Resultado = () => {
	return (
		<div className="bg text-center">
			<div className="container p-5">
				<div className="card mt-5">
					<div className="card-body p-5">
						<h2 className="card-title">Tú Pedido esta Listo</h2>
						<h3 classNames="card-subtitle mb-2 text-muted">Carmen Aguilar</h3>
						<p className="card-text">Puedes pasar a retirarlo en lo que tengas oportunidad</p>
					</div>
				</div>
			</div>
		</div>
	);
};
