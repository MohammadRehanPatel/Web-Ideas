import React from 'react'
import { NavLink } from 'react-router-dom'
import '../fonts/icomoon/style.css'
const Footer = () => {
return (
    <>
		<footer className="footer-07 mt-4 mb-0">
			<div className="container ">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						<h2 className="footer-heading"><NavLink to="/" className="logo"></NavLink></h2>
						<p className="menu">
							<NavLink to="/">Home</NavLink>
							<NavLink to="/about">About</NavLink>
							<NavLink to="/">Listing</NavLink>
							<NavLink to="/contact">Contact</NavLink>
						</p>
						<ul className="ftco-footer-social p-0">
              <li className="ftco-animate"><NavLink to="/" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="icon-github"></span></NavLink></li>
              <li className="ftco-animate"><NavLink to="/" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="icon-facebook-square"></span></NavLink></li>
              <li className="ftco-animate"><NavLink to="/" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="icon-instagram"></span></NavLink></li>
            </ul>
					</div>
				</div>
				<div className="row  ">
					<div className="col-md-12 text-center">
						<p className="copyright ">
					Copyright &copy; {new Date().getFullYear()} All rights reserved
					</p>
					</div>
				</div>
			</div>
		</footer>
    </>
)
}

export default Footer