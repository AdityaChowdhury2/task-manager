import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer className="text-[var(--background-color)] body-font bg-[var(--primary-color)]">
			<div className="container px-5 py-12 mx-auto">
				<div className="flex flex-wrap md:text-left text-center order-first">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-bold text-[var(--background-color)] tracking-widest text-sm mb-3">
							SOCIAL
						</h2>
						<nav className="list-none flex gap-3 mb-10 justify-center md:justify-start">
							<li>
								<a
									href="http://www.facebook.com"
									className="text-[var(--background-color)] hover:font-bold"
								>
									<FaXTwitter size={24} />
								</a>
							</li>
							<li>
								<a
									href="http://www.twitter.com"
									className="text-[var(--background-color)] hover:font-bold"
								>
									<FaInstagram size={24} />
								</a>
							</li>
							<li>
								<a
									href="http://www.instagram.com"
									className="text-[var(--background-color)] hover:font-bold"
								>
									<FaGithub size={24} />
								</a>
							</li>
							<li>
								<a
									href="http://www.linkedin.com"
									className="text-[var(--background-color)] hover:font-bold"
								>
									<FaLinkedinIn size={24} />
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-bold text-[var(--background-color)] tracking-widest text-sm mb-3">
							COMPANY
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a className="text-[var(--background-color)] hover:font-bold">
									About us
								</a>
							</li>
							<li>
								<a className="text-[var(--background-color)] hover:font-bold">
									Contact
								</a>
							</li>
							<li>
								<a className="text-[var(--background-color)] hover:font-bold">
									Jobs
								</a>
							</li>
							<li>
								<a className="text-[var(--background-color)] hover:font-bold">
									Press Kit
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font  text-[var(--background-color)]  font-bold tracking-widest text-sm mb-3">
							LEGAL
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a className="text-[var(--background-color)] hover:font-bold">
									Terms of use
								</a>
							</li>
							<li>
								<a className="text-[var(--background-color)] hover:font-bold">
									Privacy policy
								</a>
							</li>
							<li>
								<a className="text-[var(--background-color)] hover:font-bold">
									Cookie policy
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-bold text-[var(--background-color)] tracking-widest text-sm mb-3">
							SUBSCRIBE
						</h2>
						<div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
							<div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
								<label
									htmlFor="footer-field"
									className="leading-7 text-sm text-[var(--background-color)]"
								>
									Email
								</label>
								<input
									type="text"
									id="footer-field"
									name="footer-field"
									className="w-full bg-[var(--background-color)] bg-opacity-50 rounded border border-gray-300 focus:bg-[var(--background-color)] focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-[var(--secondary-color)] text-base outline-none text-[var(--primary-color)] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[var(--secondary-color)] border-0 py-2 px-6 focus:outline-none hover:bg-[var(--secondary-color-dark)] rounded">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
