import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { name, picture, price, _id, originalprice } = product;
  const [open, setOpen] = useState(false);

  const hovemouse = () => {
    setOpen(!open);
  };

  return (
    <Link
      to={`/card_details/${_id}`}
      onMouseEnter={hovemouse}
      onMouseLeave={hovemouse}
      className={`p-4  bg-[#F3F3F3] border min-h-[420px] border-gray-200 hover:bg-white hover:border-gray-200 hover:shadow-2xl transition duration-500 ${
        open && "border-gray-300"
      }`}
    >
      <div className="py-10 hover:opacity-70">
        <img
          className="max-w-[100%] min-h-[100px] object-cover mx-auto h-36"
          src={picture}
          alt=""
        />
      </div>

      {open && (
        <Link
          to={`/card_details/${_id}`}
          className="px-5 py-3  bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500  justify-center rounded-sm flex items-center gap-2"
        >
          <FaShoppingCart /> add to cart
        </Link>
      )}
      <div className="pt-10">
        <h1 className="text-[16px] font-semibold text-center">{name}</h1>
        <div className="flex py-3 items-center justify-center text-center gap-4">
          <h1 className="text-[14px] font-semibold line-through">
            ${originalprice}
          </h1>
          <h1 className="text-[14px] text-green-500 font-semibold ">
            ${price}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Products;
