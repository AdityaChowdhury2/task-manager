import underConstruction from '../assets/underconstruction.svg';

const About = () => {
	return (
		<div className="mx-auto max-w-2xl">
			<h1 className="text-center py-4 font-bold text-3xl mb-4">
				Under Construction
			</h1>
			<img src={underConstruction} alt="" />
		</div>
	);
};

export default About;
