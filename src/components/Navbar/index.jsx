import logo from '../../assets/logo_fv-dark.png';

const Navbar = () => {
	return (
		<body>
			<nav id='nav'>
				<div class='container flex'>
					<img src={logo} />
					<div class='links'>
						<a>Lorem1</a>
						<a>Lorem2</a>
						<a>Lorem3</a>
						<a>Lorem4</a>
					</div>
				</div>
			</nav>
		</body>
	);
};

export default Navbar;
