import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { AuthContext } from "./Context/AuthProvider";
import Spinner from "./Pages/ShopingCart/Spinner";
import routes from "./Routes/Routers";

function App() {
  const { loading } = useContext(AuthContext);
  return (
    <div className="">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <RouterProvider router={routes}></RouterProvider>
          <ToastContainer></ToastContainer>
        </>
      )}
    </div>
  );
}

export default App;
