import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useGetTaskByEmail = () => {
	const { user, loading } = useAuth();
	const axios = useAxios();

	const {
		data: tasks,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['tasks'],
		enabled: !!user && !loading,
		queryFn: async () => {
			const response = await axios(`/tasks/${user.email}`);
			return response.data;
		},
	});

	return { tasks, isLoading, refetch };
};

export default useGetTaskByEmail;
