import { Link } from 'react-router-dom';
import login from '../assets/login.jpg';
import SocialLogin from '../components/common/SocialLogin';

const Registration = () => {
	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, email, password);
	};
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
	);
};

export default Registration;
