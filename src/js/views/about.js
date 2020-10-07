import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Navbar } from "../component/navbar";
import nosotrosHead from "../../img/headpiece.png";
import team1 from "../../img/c-1.jpg";
import team2 from "../../img/c-2.jpg";
import team3 from "../../img/c-3.jpg";

export const About = () => {
	return (
		<div className="in-about">
			<div className="bg-about">
				<div className="container">
					<div className="row h-100 align-items-center">
						<div className="col-12">
							<div className="bradcumbContent">
								<h2>Sobre Nosotros</h2>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">Home</li>
										<li className="breadcrumb-item active" aria-current="page">
											Lee Nuestra Historia
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
									<h2>What you get if you start your business with us</h2>
								</div>
								<p>
									Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et
									tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic
									iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec
									odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus
									blandit. Etiam nec odio. Etiam nec odio vestibulum est mattis effic iturut magna.
									Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio
									vestibulum est mat tis effic iturut magna.
								</p>
								<a href="#" className="btn mosh-btn mt-50">
									Read More
								</a>
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
								<p>Clients</p>
								<h2>Meet Our Incredible Team</h2>
								<h5 className="mt-30">
									Est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio
									vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.{" "}
								</h5>
							</div>
						</div>
					</div>

					<div className="row">
						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={team1} />
							</div>

							<div className="team-meta-info">
								<h4>Alí Pan Dulce</h4>
								<span> Ahí </span>
								<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque.</p>
							</div>

							<div className="team-social-info">
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
							</div>
						</div>

						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={team2} />
							</div>

							<div className="team-meta-info">
								<h4>Ruben Ruben</h4>
								<span>digital designer</span>
								<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque.</p>
							</div>

							<div className="team-social-info">
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
							</div>
						</div>

						<div className=" text-center col-md-4">
							<div className="team-thumbnail">
								<img src={team3} />
							</div>

							<div className="team-meta-info">
								<h4>Johan Prado</h4>
								<span>Developer</span>
								<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque.</p>
							</div>

							<div className="team-social-info">
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
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
