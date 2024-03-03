import { Checkbox } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ShopingCartDetails = ({ handleDecrease, handleIncrease, book, cart }) => {
  const [loading, setLoading] = React.useState(true);

  const handlDelete = () => {
    fetch(`https://old-server.vercel.app/booking/${book?._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast(`You are successfully deleted `);

          setLoading(false);
        }
      });
  };

  return (
    <div className="max-w-[1200px]  px-[20px] mx-auto">
      {loading && (
        <div className="flex items-center justify-evenly p-4 gap-10">
          <div className="flex w-6/12 items-center gap-4">
            <Checkbox />
            <img
              className="w-20 h-20"
              src={book?.MobileDetails?.picture}
              alt=""
            />
            <div>
              <h1 className="text-xl font-semibold">
                {book?.MobileDetails?.name}
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-[17px] text-green-700 font-semibold">
              ${book?.MobileDetails?.price}
            </h1>
            <h1 className="line-through text-[15px] font-semibold">
              ${book?.MobileDetails?.originalprice}
            </h1>
            <div>
              <AiFillDelete
                onClick={handlDelete}
                className="hover:text-red-700 cursor-pointer"
                size={30}
              />
            </div>
          </div>
          <div>
            <motion.div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="relative">
                <input
                  placeholder="Quantity"
                  className="py-3  px-5 p-2 border border-gray-400"
                  type="text"
                />
                <div className="flex items-center right-10 top-1/3  absolute gap-3">
                  <AiOutlineMinus
                    onClick={handleDecrease}
                    className="cursor-pointer"
                    size={18}
                  />
                  <p className="font-semibold">{cart}</p>
                  <AiOutlinePlus
                    onClick={handleIncrease}
                    className="cursor-pointer"
                    size={18}
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <td>
              {book?.MobileDetails?.price && !book.MobileDetails?.paid && (
                <Link to={`/dashboard/payment/${book._id}`}>
                  <button className="btn btn-primary px-5">pay</button>
                </Link>
              )}
              {book?.MobileDetails?.price && book.MobileDetails?.paid && (
                <button className="btn btn-primary btn-disabled text-green-500">
                  Paid
                </button>
              )}
            </td>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopingCartDetails;
