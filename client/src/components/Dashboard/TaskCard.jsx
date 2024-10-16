/* eslint-disable react/prop-types */
import { Draggable } from 'react-beautiful-dnd';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import formatDate from '../../utils/formatDate';
import EditTask from '../modals/EditTask';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import useGetTaskByEmail from '../../hooks/useGetTaskByEmail';

const TaskCard = ({ item, index }) => {
	const axios = useAxios();
	const { refetch } = useGetTaskByEmail();
	const handleDelete = id => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: 'var(--secondary-color)',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				axios.delete(`/tasks/${id}`).then(response => {
					if (response.data.deletedCount) {
						toast.success('Task deleted successfully');
						refetch();
					}
				});
			}
		});
	};
	return (
		<Draggable key={item._id} draggableId={item._id} index={index}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<div className="card  bg-base-100 shadow-xl relative">
						<p className="absolute top-1 right-1 text-sm">
							{formatDate(item.deadline)}
						</p>
						<div className="card-body">
							<h3 className="font-semibold text-lg">{item.title}</h3>
							<p className="text-xs">{item.description}</p>
							<div className="card-actions justify-end">
								<button
									onClick={() =>
										document.getElementById(`${item._id}`).showModal()
									}
									className="btn btn-xs bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)]  text-[var(--background-color)]"
								>
									<MdModeEdit />
								</button>
								<EditTask item={item} />
								<button
									onClick={() => handleDelete(item._id)}
									className="btn btn-xs bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-dark)] text-[var(--background-color)]"
								>
									<MdDelete />
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default TaskCard;
