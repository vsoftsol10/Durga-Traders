import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h2>Durga Traders</h2>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/aboutUs">About Us</a>
				<a href="/#">Products</a>
				<a href="/#">Service</a>
				<a href="/contact">Contact Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;