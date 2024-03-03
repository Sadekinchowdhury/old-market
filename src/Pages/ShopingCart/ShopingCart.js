import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

import ShopingCartDetails from "./ShopingCartDetails";
import Spinner from "./Spinner";

const ShopingCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [cart, setCart] = useState(1);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch(`https://old-server.vercel.app/booking?${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user?.email]);

  const handleIncrease = () => {
    setCart(cart + 1);
  };

  const handleDecrease = () => {
    if (cart >= 2) {
      setCart(cart - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {loading ? (
        <Spinner />
      ) : (
        <div className="py-10">
          {booking?.map((book) => (
            <ShopingCartDetails
              book={book}
              key={book._id}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              cart={cart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopingCart;
