import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Dashboard from '../layouts/Dashboard';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import DashboardHome from '../components/Dashboard/DashboardHome';
import AddTask from '../pages/Dashboard/AddTask';
import PrivateRoute from './PrivateRouter';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
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
