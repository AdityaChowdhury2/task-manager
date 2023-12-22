import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { PiSignOut } from 'react-icons/pi';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
	const { logOut } = useAuth();
	const listItem = (
		<>
			<li className="bg-[var(--primary-color)] text-[var(--background-color)]">
				<NavLink className={({ isActive }) => (isActive ? '' : '')} to={'/'}>
					<div className="w-full">Home</div>
				</NavLink>
			</li>
			<li className="bg-[var(--primary-color)] text-[var(--background-color)]">
				<NavLink
					className={({ isActive }) => (isActive ? 'font-bold' : '')}
					to={'add-task'}
				>
					<div className="w-full">Add Task</div>
				</NavLink>
			</li>
			<li
				onClick={() => {
					logOut();
				}}
			></li>
		</>
	);
	return (
		<div className="drawer ">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col ">
				{/* Navbar */}
				<div className="w-full sticky z-20 top-0 navbar bg-[var(--primary-color)] bg-opacity-90 text-[var(--background-color)]">
					<div className="flex-none lg:hidden">
						<label
							htmlFor="my-drawer-3"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							<FaBars size={24} color="var(--background-color)" />
						</label>
					</div>
					<div className="flex-1 px-2 mx-2 ">
						<a className="text-xl font-bold text-[var(--background-color)]">
							Task<span className="text-[var(--secondary-color)]">Forge</span>
						</a>
					</div>
					<div className="flex-none gap-4  items-center hidden lg:flex">
						<ul className="flex gap-4  items-center">
							{/* Navbar menu content here */}
							{listItem}
						</ul>
						<button className="btn btn-sm bg-[var(--secondary-color)] border-0 rounded-md  text-white hover:bg-[var(--secondary-color-dark)]">
							Logout <PiSignOut />
						</button>
					</div>
				</div>
				{/* Page content here */}
				<div className="min-h-[calc(100vh-64px)]">
					<Outlet />
				</div>
			</div>
			<div className="drawer-side  text-[var(--background-color)]">
				<label
					htmlFor="my-drawer-3"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div className="flex flex-col p-4 w-80 min-h-[calc(100vh-62px)] bg-[var(--primary-color)] mt-[62px] justify-between items-start">
					<ul className="space-y-4">
						{/* Sidebar content here */}
						{listItem}
					</ul>
					<button
						onClick={() => logOut()}
						className="btn btn-sm bg-[var(--secondary-color)] border-0 rounded-md  text-white hover:bg-[var(--secondary-color-dark)]"
					>
						Logout <PiSignOut />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
