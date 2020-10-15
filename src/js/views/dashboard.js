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
				<div className="col-sm-12 p-3">
					<Tab.Container defaultActiveKey="profile">
						<Row>
							<Col sm={2}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey="home">Status Ordenes</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="profile">Crear una Orden</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="contact">Clientes</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={10}>
								<Tab.Content>
									<Tab.Pane eventKey="home">
										<h5>Status Ordens</h5>
										<div className="wrapper-status">
											<table className="table">
												<thead>
													<tr>
														<th scope="col">#</th>
														<th scope="col">First</th>
														<th scope="col">Last</th>
														<th scope="col">Handle</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row">1</th>
														<td>Mark</td>
														<td>Otto</td>
														<td>@mdo</td>
													</tr>
													<tr>
														<th scope="row">2</th>
														<td>Jacob</td>
														<td>Thornton</td>
														<td>@fat</td>
													</tr>
													<tr>
														<th scope="row">3</th>
														<td>Larry</td>
														<td>the Bird</td>
														<td>@twitter</td>
													</tr>
												</tbody>
											</table>
										</div>
									</Tab.Pane>

									<Tab.Pane eventKey="profile">
										<h5>Profile Details</h5>
										<p>
											At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
											praesentium voluptatum deleniti atque corrupti quos dolores et quas
											molestias excepturi sint occaecati cupiditate non provident, similique sunt
											in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
											fuga.
										</p>
									</Tab.Pane>

									<Tab.Pane eventKey="contact">
										<h5>Contact Info</h5>
										<p>
											At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
											praesentium voluptatum deleniti atque corrupti quos dolores et quas
											molestias excepturi sint occaecati cupiditate non provident, similique sunt
											in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
											fuga.
										</p>
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
