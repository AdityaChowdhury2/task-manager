import Hero from '../assets/Home/Hero.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
	const navigate = useNavigate();
	return (
		<section className="text-[var(--primary-color)] body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, origin: 1 }}
					className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
				>
					<h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium lg:font-bold ">
						Welcome to Task
						<span className="text-[var(--secondary-color)]">Forge </span>-
						<br className="hidden lg:inline-block" />
						Your Personal Task Manager
					</h1>
					<p className="mb-8 leading-relaxed">
						Stay organized, boost productivity, and accomplish more with our
						intuitive task management solution.
					</p>
					<div className="flex justify-center">
						<motion.button
							whileHover={{ scale: 1.1 }}
							className="inline-flex text-white bg-[var(--secondary-color)] border-0 py-2 px-6 focus:outline-none hover:bg-[var(--secondary-color-dark)] rounded text-lg"
							onClick={() => navigate('/dashboard')}
						>
							Let&apos;s Explore
						</motion.button>
					</div>
				</motion.div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						data-aos="flip-left"
						data-aos-duration="2000"
						className="object-cover object-center rounded"
						alt="hero"
						src={Hero}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
