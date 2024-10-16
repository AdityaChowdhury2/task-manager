import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import { FaRegCalendar } from 'react-icons/fa6';
import useUpdateTask from '../../hooks/useUpdateTask';

const EditTask = ({ item }) => {
	const { handleSubmit, register, control } = useForm();
	const updateTask = useUpdateTask();
	const handleClose = id => document.getElementById(`${id}`).close();

	const onSubmit = async values => {
		console.log(values);

		updateTask({ data: values, id: item._id });
		handleClose(item._id);
	};
	return (
		<dialog id={item._id} className="modal">
			<div className="modal-box">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button
						onClick={() => handleClose(item._id)}
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</button>
				</form>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-[var(--primary-color)] font-bold">
								Titles
							</span>
						</label>
						<input
							type="text"
							placeholder="Work titles"
							defaultValue={item.title}
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
							defaultValue={item.description}
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
							defaultValue={new Date(item.deadline)}
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
							defaultValue={item.priority}
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
							Update Task
						</button>
					</div>
				</form>
			</div>
		</dialog>
	);
};

EditTask.propTypes = {
	item: PropTypes.object,
};
export default EditTask;
