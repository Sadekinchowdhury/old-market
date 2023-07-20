import './App.css';
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routers';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  // from-gray-900 to-gray-600 bg-gradient-to-r mx-auto
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
