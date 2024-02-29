import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";

const AddvirtisCard = ({ product, setBooking }) => {
  const {
    name,
    price,
    location,
    description,
    originalprice,
    sellername,
    postedtime,
    brand,
    picture,
    usedtime,
    email,
  } = product;

  const { user, setNotiNumber, notiNumber } = useContext(AuthContext);

  const [cart, setCart] = useState();

  const [cartAdd, setCartAdd] = useState(false);

  const update = {
    cart,
    cartAdd,
    bookingEmail: user?.email,
    MobileDetails: product,
  };
  const handlAddCart = () => {
    setCart(1);
    setNotiNumber(notiNumber + 1);
    setCartAdd(true);

    fetch("https://old-server.vercel.app/booking", {
      method: "POST",

      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("congratulations you are successfully cart add ");
        } else {
          toast.error(data.message);
        }
      });
  };

  // const { data: users = {}, refetch } = useQuery({
  //   queryKey: ["user", "email"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://old-server.vercel.app/user?email=${product?.email}`
  //     );
  //     const data = await res.json();
  //     refetch();
  //     return data;
  //   },
  // });

  return (
    <div className="py-10">
      {product.advertise || !product.soldStatus ? (
        <div className={`card rounded-md`}>
          <Link to={`/card_details/${product?._id}`}>
            <div className="flex pt-2 justify-center items-center ">
              <img
                className="min-h-[140px] max-h-[140px] max-w-[140px] object-cover mx-auto mb-1  h-40"
                src={picture}
                alt=""
              />
              <hr />
            </div>
            <h2 className="card-title py-3 flex items-center text-center justify-center uppercase">
              {name}
            </h2>
            <div className="flex gap-4 justify-center pb-3 items-center text-center">
              <p className="text-xl font-semibold line-through">${price}</p>
              <p className="text-xl font-semibold">${originalprice}</p>
            </div>
          </Link>
          <div className={``}>
            <div className="w-full">
              {user?.email ? (
                <>
                  <Link
                    onClick={handlAddCart}
                    className="px-5 py-3 bg-black text-white font-semibold hover:text-black hover:bg-gray-300  hover:border-[1px] hover:border-gray-500  justify-center rounded-sm flex items-center gap-2 border border-transparent duration-300"
                  >
                    <FaShoppingCart /> add to cart
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-5 py-3 bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 border  justify-center rounded-sm flex items-center gap-2"
                  >
                    <FaShoppingCart /> add to cart
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>Nothing...</h1>
        </>
      )}
    </div>
  );
};

export default AddvirtisCard;
