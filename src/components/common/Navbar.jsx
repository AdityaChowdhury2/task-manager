import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navList = (
	<>
		<li>
			<div className="cursor-pointer">Item 1</div>
		</li>
		<li>
			<div className="cursor-pointer">Item 3</div>
		</li>
	</>
);

const Navbar = () => {
	return (
		<div className="navbar container">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<FaBars size={18} color="var(--primary-color)" />
					</div>
					<ul
						tabIndex={0}
						className="flex flex-col dropdown-content mt-3 z-[1] p-4 space-y-3 shadow bg-base-100 rounded-box w-44"
					>
						{navList}
					</ul>
				</div>
				<a className="text-xl font-bold text-[var(--primary-color)]">
					Task<span className="text-[var(--secondary-color)]">Forge</span>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navList}</ul>
			</div>
			<div className="navbar-end">
				<Link to="/login">
					<a className="btn bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--primary-color-dark)] transition-colors btn-sm rounded-md">
						Login
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
