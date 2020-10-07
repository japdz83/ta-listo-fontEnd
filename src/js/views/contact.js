import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Navbar } from "../component/navbar";
import nosotrosHead from "../../img/headpiece.png";
import team1 from "../../img/c-1.jpg";
import team2 from "../../img/c-2.jpg";
import team3 from "../../img/c-3.jpg";

export const Contact = () => {
	return (
		<div className="in-about">
			<div className="bg-about">
				<div className="container">
					<div className="row h-100 align-items-center">
						<div className="col-12">
							<div className="bradcumbContent">
								<h2>Contactanos</h2>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">Home</li>
										<li className="breadcrumb-item active" aria-current="page">
											Contactanos
										</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="contact-area section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8">
							<div className="contact-form-area">
								<h2>Get in touch</h2>
								<form action="#">
									<div className="row">
										<div className="col-12 col-md-6">
											<input type="text" className="form-control" id="name" placeholder="Name" />
										</div>
										<div className="col-12 col-md-6">
											<input
												type="email"
												className="form-control"
												id="email"
												placeholder="E-mail"
											/>
										</div>
										<div className="col-12">
											<input
												type="text"
												className="form-control"
												id="subject"
												placeholder="Subject"
											/>
										</div>
										<div className="col-12">
											<textarea
												name="message"
												className="form-control"
												id="message"
												cols="30"
												rows="10"
												placeholder="Message"
											/>
										</div>
										<button className="btn mosh-btn mt-50" type="submit">
											Send Message
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="col-12 col-md-4">
							<div className="contact-information">
								<h2>Contact</h2>
								<div className="single-contact-info d-flex">
									<div className="contact-icon mr-15">
										<img src="img/core-img/map.png" alt="" />
									</div>
									<p> 4127/ 5B-C Mislane Road, Gibraltar, UK </p>
								</div>
								<div className="single-contact-info d-flex">
									<div className="contact-icon mr-15">
										<img src="img/core-img/call.png" alt="" />
									</div>
									<p>Main: 203-808-8613 Office: 203-808-8648</p>
								</div>
								<div className="single-contact-info d-flex">
									<div className="contact-icon mr-15">
										<img src="img/core-img/message.png" alt="" />
									</div>
									<p>office@yourbusiness.com</p>
								</div>
								<div className="contact-social-info mt-50">
									<a href="#">
										<i className="fa fa-pinterest" aria-hidden="true" />
									</a>
									<a href="#">
										<i className="fa fa-facebook" aria-hidden="true" />
									</a>
									<a href="#">
										<i className="fa fa-twitter" aria-hidden="true" />
									</a>
									<a href="#">
										<i className="fa fa-dribbble" aria-hidden="true" />
									</a>
									<a href="#">
										<i className="fa fa-behance" aria-hidden="true" />
									</a>
									<a href="#">
										<i className="fa fa-linkedin" aria-hidden="true" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
