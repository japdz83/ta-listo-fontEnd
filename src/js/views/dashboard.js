import React, { useState, useEffect, useContext } from "react";
import "../../styles/index.scss";

import { Tabs, Tab, TabContainer, TabContent, TabPane, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavDash } from "../component/navDash";

export const Dashboard = () => {
	return (
		<div>
			<NavDash />
			<div className="row">
				<div className="col-sm-12 p-4">
					<Tab.Container defaultActiveKey="home">
						<Row>
							<Col sm={2}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey="home">Status Ordenes</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="profile">Crear una Orden</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={10}>
								<Tab.Content>
									<Tab.Pane eventKey="home">
										<h5 className="mb-3 p-3">Status Ordens</h5>
										<div className="wrapper-status">
											<table className="table p-3">
												<thead>
													<tr>
														<th scope="col">Orden de Trabajo</th>
														<th scope="col">Nombre Cliente</th>
														<th scope="col">Descripción</th>
														<th scope="col">Status Orden</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row">0001</th>
														<td>Mark Rupertina</td>
														<td>Tintorería</td>
														<td>
															<tr>
																<button>En Proceso</button>
																<button>Lista</button>
																<button>Entregado</button>
															</tr>
														</td>
													</tr>
													<tr>
														<th scope="row">0002</th>
														<td>Ruben Duarte</td>
														<td>Lavandería y Tintorería</td>
														<td>
															<tr>
																<button>En Proceso</button>
																<button>Lista</button>
																<button>Entregado</button>
															</tr>
														</td>
													</tr>
													<tr>
														<th scope="row">0003</th>
														<td>Alí Primera</td>
														<td>Lavandería</td>
														<td>
															<tr>
																<button>En Proceso</button>
																<button>Lista</button>
																<button>Entregado</button>
															</tr>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</Tab.Pane>

									<Tab.Pane eventKey="profile">
										<h5 className="mb-3 p-3">Cargar una Orden</h5>
										<div className="box-form-orden p-3">
											<div className="container">
												<div className="row">
													<div className="col-md-10">
														<form className="needs-validation">
															<div className="form-row">
																<div className="col-md-6 mb-3">
																	<label>Nombre y Apellido</label>
																	<input
																		type="text"
																		className="form-control"
																		id="validationTooltip01"
																		required
																		placeholder="Nombre"
																	/>
																	<div className="valid-tooltip">Looks good!</div>
																</div>
																<div className="col-md-6 mb-3">
																	<label>N° de Orden</label>
																	<input
																		type="text"
																		className="form-control"
																		id="validationTooltip02"
																		required
																	/>
																	<div className="valid-tooltip">Looks good!</div>
																</div>
															</div>
															<div className="form-row">
																<div className="col-md-6 mb-3">
																	<label>Email Cliente</label>
																	<input
																		type="email"
																		className="form-control"
																		id="validationTooltip03"
																		required
																		placeholder="Email"
																	/>
																	<div className="invalid-tooltip">
																		Please provide a valid city.
																	</div>
																</div>

																<div className="col-md-6 mb-3">
																	<label>Teléfono</label>
																	<input
																		type="text"
																		className="form-control"
																		id="validationTooltip05"
																		required
																		placeholder="Teléfono"
																	/>
																	<div className="invalid-tooltip">
																		Please provide a valid zip.
																	</div>
																</div>
																<div className="col-md-12 mb-3">
																	<label>Dirección Cliente</label>
																	<input
																		type="text"
																		className="form-control"
																		id="validationTooltip05"
																		required
																		placeholder="Dirección"
																	/>
																	<div className="invalid-tooltip">
																		Please provide a valid zip.
																	</div>
																</div>

																<div className="col-md-6 mb-3">
																	<label>Seleccione el tipo de Servicio</label>
																	<select
																		className="custom-select"
																		id="validationTooltip04"
																		required>
																		<option selected disabled value="">
																			Tipo Servicios
																		</option>
																		<option>Tintorería</option>
																		<option>Lavandería</option>
																		<option>Secado</option>
																		<option>...</option>
																	</select>
																	<div className="invalid-tooltip">
																		Please select a valid state.
																	</div>
																</div>
															</div>
															<button className="btn btn-primary" type="submit">
																Crear Orden
															</button>
														</form>
													</div>
												</div>
											</div>
										</div>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</div>
			</div>
		</div>
	);
};
