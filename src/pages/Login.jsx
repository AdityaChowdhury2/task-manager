import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import login from '../assets/login.jpg';
import SocialLogin from '../components/common/SocialLogin';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
	const { user, loading, signIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const handleSubmit = async e => {
		try {
			e.preventDefault();
			const form = e.target;
			const email = form.email.value;
			const password = form.password.value;
			console.log(email, password);
			const response = await signIn({ email, password });
			console.log(response);

			toast.success('🔥🔥 স্বাগতম 🔥🔥');
			navigate(`${location.state || '/'}`, { replace: true });
		} catch (error) {
			toast.error('Error while submitting');
		}
	};
	if (user) return <Navigate to="/" />;
	else if (loading) {
		return (
			<div className="flex items-center justify-center h-[30vh]">
				<span className="loading loading-spinner loading-lg text-[var(--primary-color)]"></span>
			</div>
		);
	} else {
		return (
			<div className="hero min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="w-1/2 hidden lg:block">
						<img src={login} alt="" />
					</div>
					<div className="card lg:shrink-0 max-w-xl w-full shadow-2xl lg:w-1/2 bg-base-100 lg:px-10">
						<form className="card-body mt-5" onSubmit={handleSubmit}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									name="password"
									placeholder="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--primary-color-dark)] rounded-lg">
									Login
								</button>
							</div>
							<SocialLogin />
							<p className="text-sm text-center mt-4">
								Don&apos;t have an Account?{' '}
								<Link to="/register" className="text-var[--primary-color]">
									Create Account
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
};

export default Login;
