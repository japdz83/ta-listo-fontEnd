import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Navbar } from "../component/navbar";
import nosotrosHead from "../../img/headpiece.png";
import ingreso from "../../img/ingresar-web.png";
import buscar from "../../img/buscar-orden.png";
import retira from "../../img/retirar-producto.png";
import registro from "../../img/registrate.png";
import orden from "../../img/registro-orden.png";
import revisar from "../../img/revisar-info.png";
import cambio1 from "../../img/cambio-status.png";
import cambio2 from "../../img/cambio-status2.png";
import aviso from "../../img/te-llamo.png";

export const HowDoes = () => {
	return (
		<div className="in-about">
			<div className="bg-about">
				<div className="container">
					<div className="row h-100 align-items-center">
						<div className="col-12">
							<div className="bradcumbContent">
								<h2>Como Funciona</h2>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">Home</li>
										<li className="breadcrumb-item active" aria-current="page">
											Asi Funciona
										</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="mosh-aboutUs-area section_padding_100_0">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-md-6">
							<div Name="mosh-about-us-content">
								<div className="section-heading">
									<p>Features</p>
									<h2>¿Qué es Ta’ Listo?</h2>
								</div>
								<p>
									Ta’ Listo es una rápida, sencilla y muy útil plataforma de consulta en tiempo real
									para saber en qué estado se encuentra el pedido o servicio que solicitaste.
								</p>
								<p>
									Con solo introducir el número de guía o factura asignado en el comercio que te está
									prestando servicio obtienes de inmediato la información, evitando llamadas o visitas
									innecesarias para conocer si tú pedido o servicio está listo. Además, gracias a esta
									posibilidad de seguimiento y confirmación constantemente actualizada, puedes
									planificar y organizar eficientemente rutas y rutinas a la hora de retirar tus
									pedidos.
								</p>
							</div>
						</div>

						<div className="col-12 col-md-6">
							<div className="mosh-about-us-thumb wow fadeInUp" data-wow-delay="0.5s">
								<img src={nosotrosHead} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mosh-team-area section_padding_100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10">
							<div className="section-heading text-center">
								<p>PARA EL USUARIO</p>
								<h2>Consulta el estado del servicio</h2>
								<h5 className="mt-30" />
							</div>
						</div>
					</div>

					<div className="row">
						<div className=" text-center col-md-3">
							<div className="team-thumbnail">
								<img src={ingreso} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span> </span>
								<p>1.- Visita www.talisto.com</p>
							</div>
						</div>

						<div className=" text-center col-md-3">
							<div className="team-thumbnail">
								<img src={buscar} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span />
								<p>2.- Ingresa el número de guía u orden de servicio asignado por el comercio.</p>
							</div>
						</div>

						<div className=" text-center col-md-3">
							<div className="team-thumbnail">
								<img src={revisar} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span />
								<p>3.- Revisa la información mostrada en pantalla.</p>
							</div>
						</div>

						<div className=" text-center col-md-3">
							<div className="team-thumbnail">
								<img src={retira} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span />
								<p>4.- Retira el producto en el establecimiento comercial.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<hr />
			<section className="mosh-team-area section_padding_100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10">
							<div className="section-heading text-center">
								<p>PARA EL COMERCIO</p>
								<h2>Muestra al cliente final el status de su pedido u orden</h2>
								<h5 className="mt-30" />
							</div>
						</div>
					</div>

					<div className="row">
						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={ingreso} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span> </span>
								<p>1.- Visita www.talisto.com</p>
							</div>
						</div>

						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={registro} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span />
								<p>2.- Regístrate en nuestra plataforma</p>
							</div>
						</div>

						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={orden} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span />
								<p>3.- Registra la orden de pedido de tus clientes.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={cambio1} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span />
								<p>
									4.- Elige el campo correspondiente al estado de la orden de pedido de tus clientes.
								</p>
							</div>
						</div>
						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={cambio2} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span />
								<p>5.- Modifica el estado cuando estén listas las órdenes de pedido de tus clientes.</p>
							</div>
						</div>
						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={aviso} />
							</div>

							<div className="team-meta-info">
								<h4 />
								<span />
								<p>6.- Nosotros le avisamos a tus clientes que su pedido Ta’ listo.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
