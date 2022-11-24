import './App.css';
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routers';


function App() {

  return (
    <div className="max-w-screen-lg mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
