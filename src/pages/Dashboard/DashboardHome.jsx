import { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { uuid4 } from 'uuid4';
import TaskCard from '../../components/Dashboard/TaskCard';
import useGetTaskByEmail from '../../hooks/useGetTaskByEmail';
import useUpdateTask from '../../hooks/useUpdateTask';

const DashboardHome = () => {
	const updateTask = useUpdateTask();
	const { tasks, isLoading } = useGetTaskByEmail();
	const [columns, setColumns] = useState([]);
	useEffect(() => {
		const columnsFromBackend = {
			[uuid4()]: {
				title: 'To-Do',
				name: 'todo',
				items: tasks?.filter(task => task.status === 'todo') || [],
			},
			[uuid4()]: {
				title: 'In Progress',
				name: 'inProgress',
				items: tasks?.filter(task => task.status === 'inProgress') || [],
			},
			[uuid4()]: {
				title: 'Done',
				name: 'done',
				items: tasks?.filter(task => task.status === 'done') || [],
			},
		};
		setColumns(columnsFromBackend);
	}, [tasks]);

	const onDragEnd = (result, columns, setColumns) => {
		if (!result.destination) return;
		const { source, destination } = result;

		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = columns[source.droppableId];

			const destColumn = columns[destination.droppableId];

			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];
			const [removed] = sourceItems.splice(source.index, 1);
			updateTask({ data: { status: destColumn.name }, id: removed._id });

			destItems.splice(destination.index, 0, removed);
			setColumns({
				...columns,
				[source.droppableId]: {
					...sourceColumn,
					items: sourceItems,
				},
				[destination.droppableId]: {
					...destColumn,
					items: destItems,
				},
			});
		} else {
			const column = columns[source.droppableId];
			const copiedItems = [...column.items];
			const [removed] = copiedItems.splice(source.index, 1);
			copiedItems.splice(destination.index, 0, removed);
			setColumns({
				...columns,
				[source.droppableId]: {
					...column,
					items: copiedItems,
				},
			});
		}
	};
	return (
		<>
			{isLoading ? (
				<></>
			) : (
				<div className="overflow-auto">
					<DragDropContext
						onDragEnd={result => onDragEnd(result, columns, setColumns)}
					>
						<div
							style={{
								justifyContent: 'center',
								flexDirection: 'row',
								minWidth: '100vw',
								display: 'inline-flex',
							}}
						>
							<div className="m-2 inline-flex gap-4 justify-center max-w-screen-lg">
								{Object.entries(columns).map(([columnId, column]) => {
									return (
										<div
											key={columnId}
											className="bg-[var(--primary-color)] p-2 rounded-md max-h-min"
										>
											<h1 className="text-center font-bold text-[var(--background-color)] mb-4">
												{column.title}
											</h1>
											<Droppable droppableId={columnId} key={columnId}>
												{(provided, snapshot) => {
													return (
														<div
															{...provided.droppableProps}
															ref={provided.innerRef}
															style={{
																background: snapshot.isDraggingOver
																	? 'lightblue'
																	: 'lightgrey',
																padding: 4,
																minHeight: 500,
																minWidth: 300,
																borderRadius: '5px',
																border: '3px dashed var(--primary-color)',
															}}
															className="space-y-2 "
														>
															{column.items.map((item, index) => (
																<TaskCard
																	key={index}
																	item={item}
																	index={index}
																/>
															))}
															{provided.placeholder}
														</div>
													);
												}}
											</Droppable>
										</div>
									);
								})}
							</div>
						</div>
					</DragDropContext>
				</div>
			)}
		</>
	);
};

export default DashboardHome;
