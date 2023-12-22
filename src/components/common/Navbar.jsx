import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const navList = (
	<>
		<li className="hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] text-[var(--primary-color)] rounded-md">
			<div className="cursor-pointer p-2">Item 1</div>
		</li>
		<li className="hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] text-[var(--primary-color)] rounded-md">
			<div className="cursor-pointer p-2">Item 3</div>
		</li>
	</>
);

const Navbar = () => {
	const { user, logOut } = useAuth();
	return (
		<div className="navbar container">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<FaBars size={18} color="var(--primary-color)" />
					</div>
					<ul
						tabIndex={0}
						className="flex flex-col dropdown-content mt-3 z-[1] p-1 space-y-3 shadow bg-base-100 rounded-box w-44"
					>
						{navList}
					</ul>
				</div>
				<Link
					to={'/'}
					className="text-xl font-bold text-[var(--primary-color)]"
				>
					Task<span className="text-[var(--secondary-color)]">Forge</span>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navList}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src={
										user?.profileURL ||
										`https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`
									}
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
						>
							<li>
								<Link to={'/dashboard'}>
									<div className="justify-between">Dashboard</div>
								</Link>
							</li>

							<li className="text-[var(--secondary-color-dark)] font-bold">
								<a onClick={() => logOut()}>Logout</a>
							</li>
						</ul>
					</div>
				) : (
					<Link to="/login">
						<div className="btn bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--primary-color-dark)] transition-colors btn-sm rounded-md">
							Login
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
