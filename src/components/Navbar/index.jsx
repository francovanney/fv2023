import { Nav } from "react-bootstrap";
import logo from "../../assets/logo_fv-dark.png";

const Navbar = () => {
	const nav = document.querySelector("#nav");

	const onScroll = (event) => {
		const scrollPosition = event.target.scrollingElement.scrollTop;
		if (scrollPosition > 10) {
			if (!nav.classList.contains("scrolled-down")) {
				nav.classList.add("scrolled-down");
			}
		} else {
			if (nav.classList.contains("scrolled-down")) {
				nav.classList.remove("scrolled-down");
			}
		}
	};

	document.addEventListener("scroll", onScroll);

	
	return (
		<body>
			<Nav id='nav'>
				<div class='container flex'>
					<img src={logo} />
					<div class='links'>
						<Nav.Link>Lorem1</Nav.Link>
						<Nav.Link>Lorem2</Nav.Link>
						<Nav.Link>Lorem3</Nav.Link>
						<Nav.Link>Lorem4</Nav.Link>
					</div>
				</div>
			</Nav>
		</body>
	);
};

export default Navbar;
