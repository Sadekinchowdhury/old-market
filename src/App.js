import './App.css';
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routers';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider';
import Spinner from './Pages/ShopingCart/Spinner';


function App() {
  const { loading } = useContext(AuthContext)
  return (
    <div className="">
      {
        loading ? <Spinner /> : <>
          <RouterProvider router={routes}></RouterProvider>
          <ToastContainer></ToastContainer></>
      }
    </div>
  );
}

export default App;
