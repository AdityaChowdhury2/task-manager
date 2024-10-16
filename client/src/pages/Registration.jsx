import { Link, useNavigate, Navigate } from 'react-router-dom';
import login from '../assets/login.jpg';
import SocialLogin from '../components/common/SocialLogin';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import Navbar from '../components/common/Navbar';

const Registration = () => {
	const { createUser, updateNameAndDisplayPicture, user, loading } = useAuth();
	const axios = useAxios();
	const navigate = useNavigate();
	const handleSubmit = async e => {
		e.preventDefault();
		const form = e.target;
		const displayName = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, email, password);
		if (password.length < 6) {
			return toast.error('Password must be at least 6 characters');
		}
		if (/^[^!@#$%^&*]*$/.test(password)) {
			return toast.error('Please add at least one Special character');
		}
		if (/^[^A-Z]*$/.test(password)) {
			return toast.error('Please add at least one capital letter');
		}
		const res = await createUser({ email, password });

		await updateNameAndDisplayPicture({ displayName });
		navigate(location.state || '/');
		console.log(res.user);
		try {
			await axios.put(`/users/${email}`, { displayName, email });
		} catch (err) {
			console.log(err);
		}
		toast.success('User created successfully');
	};
	if (user) return <Navigate to="/" />;
	else if (loading)
		return (
			<div className="flex items-center justify-center h-[30vh]">
				<span className="loading loading-spinner loading-lg text-[var(--primary-color)]"></span>
			</div>
		);
	return (
		<>
			<Navbar />
			<div className="hero min-h-[calc(100vh-68px)]">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="w-1/2 hidden lg:block">
						<img src={login} alt="" />
					</div>
					<div className="card lg:shrink-0 max-w-xl w-full shadow-2xl lg:w-1/2 bg-base-100 lg:px-10">
						<form className="card-body mt-5" onSubmit={handleSubmit}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="name"
									name="name"
									placeholder="name"
									className="input input-bordered"
									required
								/>
							</div>
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
							</div>
							<div className="form-control mt-6">
								<button className="btn bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--primary-color-dark)] rounded-lg">
									Register
								</button>
							</div>
							<SocialLogin />
							<p className="text-sm text-center mt-4">
								Already have an Account?
								<Link to="/login" className="text-[var(--primary-color)]">
									Sign in
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Registration;
