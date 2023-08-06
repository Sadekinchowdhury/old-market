import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authprovide from './Context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';


import {
  QueryClient, QueryClientProvider
} from '@tanstack/react-query'


const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovide>
        <App />

      </Authprovide>
    </QueryClientProvider>

  </React.StrictMode>
);

 
reportWebVitals();
