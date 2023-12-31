import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import AuthProvider from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<AuthProvider>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<Toaster />
		</QueryClientProvider>
	</AuthProvider>
	// </React.StrictMode>
);
