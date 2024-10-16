import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Dashboard from '../layouts/Dashboard';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import DashboardHome from '../pages/Dashboard/DashboardHome';
import AddTask from '../pages/Dashboard/AddTask';
import PrivateRoute from './PrivateRouter';
import About from '../pages/About';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <About />,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: '/dashboard',
				element: <DashboardHome />,
			},
			{
				path: 'add-task',
				element: <AddTask />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Registration />,
	},
]);

export default router;
