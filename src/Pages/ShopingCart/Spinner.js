import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Spinner = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-blue-500"></div>
        </div>
      )}
    </>
  );
};

export default Spinner;
