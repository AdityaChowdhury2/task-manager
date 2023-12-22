import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import { FaRegCalendar } from 'react-icons/fa6';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';

const AddTask = () => {
	const { reset, handleSubmit, register, control } = useForm();
	const { user } = useAuth();
	const axios = useAxios();
	const onSubmit = async values => {
		// console.log(values);
		const response = await axios.post(`/tasks`, {
			...values,
			email: user.email,
			status: 'todo',
		});
		console.log(response.data);
		reset();
	};

	return (
		<div className="px-4">
			<h1 className="text-center mt-10 text-2xl font-bold text-[var(--primary-color)]">
				Add Task
			</h1>
			<form
				className="flex flex-col max-w-md mx-auto"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="form-control">
					<label className="label">
						<span className="label-text text-[var(--primary-color)] font-bold">
							Titles
						</span>
					</label>
					<input
						type="text"
						placeholder="Work titles"
						className="input input-bordered"
						{...register('title', { required: true })}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text text-[var(--primary-color)] font-bold">
							Description
						</span>
					</label>
					<textarea
						className="textarea textarea-bordered"
						placeholder="Description"
						{...register('description', { required: true })}
					></textarea>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text text-[var(--primary-color)] font-bold">
							Deadline
						</span>
					</label>
					<Controller
						control={control}
						name="deadline"
						render={({ field }) => (
							<DatePicker
								showIcon
								selected={field.value}
								onChange={date => field.onChange(date)}
								isClearable
								calendarIconClassname="mt-2"
								className="input input-bordered w-full"
								icon={<FaRegCalendar />}
							/>
						)}
					/>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text text-[var(--primary-color)] font-bold">
							Priority
						</span>
					</label>
					<select
						className="input input-bordered"
						name="priority"
						{...register('priority', { required: true })}
					>
						<option value="" disabled>
							Select Option
						</option>
						<option value="low">Low</option>
						<option value="moderate">Moderate</option>
						<option value="high">High</option>
					</select>
				</div>
				<div className="form-control mt-6">
					<button className="btn bg-[var(--primary-color)] text-[var(--background-color)] rounded-md hover:bg-[var(--primary-color-dark)]">
						Save Task
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddTask;
