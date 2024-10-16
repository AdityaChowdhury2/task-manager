import webDeveloper from '../assets/Home/web-developer-flatline.svg';
import entrepreneurs from '../assets/Home/entrepreneurs-two-color.svg';
import student from '../assets/Home/school-isometric.svg';
import teacher from '../assets/Home/teacher-monochromatic.svg';

const CommunitySection = () => {
	return (
		<div className="my-12">
			<h2 className="text-3xl text-center text-[var(--primary-color)] font-bold">
				Our Diverse <span className="text-[var(--secondary-color)]">User</span>{' '}
				Community
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-5 container gap-4 text-center">
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-bottom"
					className="px-6 w-full"
				>
					<div className=" py-6 rounded-lg">
						<div className="w-52 mx-auto h-52">
							<img
								src={webDeveloper}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<h4 className="title-font font-medium text-xl text-gray-900 mt-5">
							Developers
						</h4>
						<p className="leading-relaxed">
							Optimize coding sprints, project timelines, and collaboration.
						</p>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-bottom"
					className=" px-6 w-full"
				>
					<div className="  py-6 rounded-lg">
						<div className="w-52 mx-auto h-52">
							<img
								src={entrepreneurs}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<h4 className="title-font font-medium text-xl text-gray-900 mt-5">
							Entrepreneurs
						</h4>
						<p className="leading-relaxed">
							Entrepreneurs rely on us for effective business task management.
						</p>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-bottom"
					className=" px-6 w-full"
				>
					<div className="  py-6 rounded-lg">
						<div className="w-52 mx-auto h-52">
							<img
								src={student}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>

						<h4 className="title-font font-medium text-xl text-gray-900 mt-5">
							Students
						</h4>
						<p className="leading-relaxed">
							Optimize study schedules and assignment timelines.
						</p>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-bottom"
					className=" px-6 w-full"
				>
					<div className="  py-6 rounded-lg">
						<div className="w-52 mx-auto h-52">
							<img
								src={teacher}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>

						<h4 className="title-font font-medium text-xl text-gray-900 mt-5">
							Educators
						</h4>
						<p className="leading-relaxed">
							Streamline classroom activities for a more focused teaching
							approach.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommunitySection;
