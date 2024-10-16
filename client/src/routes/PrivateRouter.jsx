import PropTypes from 'prop-types';

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<span className="loading loading-spinner loading-lg text-[var(--primary-color)]"></span>
			</div>
		);
	}
	if (user) {
		return children;
	} else return <Navigate to={'/login'} state={location.pathname} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
