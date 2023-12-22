/* eslint-disable react/prop-types */
import { Draggable } from 'react-beautiful-dnd';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import formatDate from '../utils/formatDate';

const TaskCard = ({ item, index }) => {
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
								<button className="btn btn-xs bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)]  text-[var(--background-color)]">
									<MdModeEdit />
								</button>
								<button className="btn btn-xs bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-dark)] text-[var(--background-color)]">
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
