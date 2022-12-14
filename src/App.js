import './App.css';
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routers';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <div className="max-w-screen-lg mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
