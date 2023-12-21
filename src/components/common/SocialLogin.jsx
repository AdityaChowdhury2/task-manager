import { BsGoogle } from 'react-icons/bs';
// import useAuthData from '../../hooks/useAuthData';

// import { useLocation, useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

const SocialLogin = () => {
	// const { googleSignIn } = useAuthData();
	// const navigate = useNavigate();
	// const location = useLocation();
	const handleGoogleSignIn = () => {
		// googleSignIn()
		// 	.then(res => {
		// 		console.log(res.user);
		// 		navigate(location.state || '/');
		// 		toast.success('Login Successful');
		// 	})
		// 	.catch(err => {
		// 		console.log(err.message);
		// 		toast.error('Please Try Again');
		// 	});
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
