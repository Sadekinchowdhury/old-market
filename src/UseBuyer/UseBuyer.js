import { useEffect, useState } from "react";

const UseBuyer = (email) => {
  const [isBuyer, setisBuyer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://old-server.vercel.app/users/buyer/${email}`, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setisBuyer(data.isBuyer);
          setIsLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isLoading];
};

export default UseBuyer;
