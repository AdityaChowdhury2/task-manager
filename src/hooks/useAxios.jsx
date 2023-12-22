import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://task-management-server-aditya.vercel.app/api/v1',
});
const useAxios = () => {
	return instance;
};

export default useAxios;
