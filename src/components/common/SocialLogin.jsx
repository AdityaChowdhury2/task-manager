import { BsGoogle } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';

import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';

const SocialLogin = () => {
	const { googleSignIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const axios = useAxios();
	const handleGoogleSignIn = async () => {
		try {
			const response = await googleSignIn();
			console.log(response.user);
			navigate(location.state || '/');
			toast.success('Login Successful');
			try {
				axios.put(`/users/${response.user.email}`, {
					displayName: response.user.displayName,
					email: response.user.email,
				});
			} catch (err) {
				console.log(err);
			}
		} catch (error) {
			console.log(error.message);

			toast.error('Please Try Again');
		}
	};
	return (
		<>
			<div className="divider">Or</div>
			<div
				onClick={handleGoogleSignIn}
				className="flex justify-center gap-4 items-center border-2 border-[var(--secondary-color)] rounded-lg text-[var(--secondary-color)] hover:text-orange-50 hover:bg-[var(--secondary-color-dark)] hover:cursor-pointer duration-500 hover:bg-opacity-90 hover:border-transparent py-2"
			>
				<BsGoogle /> Google
			</div>
		</>
	);
};

export default SocialLogin;
