import { useMutation } from '@tanstack/react-query';
import useAxios from './useAxios';
import toast from 'react-hot-toast';
const useUpdateTask = () => {
	const axios = useAxios();

	const { mutate: updateTask } = useMutation({
		mutationFn: async ({ data, id }) => {
			const response = await axios.patch(`/tasks/${id}`, data);
			return response.data;
		},
		onSuccess: () => {
			toast.success('Status updated successfully');
		},
	});
	return updateTask;
};

export default useUpdateTask;
