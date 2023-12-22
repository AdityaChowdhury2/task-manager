import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<div className="min-h-[calc(100vh-328px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
