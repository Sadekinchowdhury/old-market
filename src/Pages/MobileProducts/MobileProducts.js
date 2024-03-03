import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MobileProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://old-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        // Filter products by category
        const smartPhoneProducts = data.filter(
          (product) => product.category === "mobile"
        );
        setProducts(smartPhoneProducts);
      });
  }, []);

  return (
    <div className="h-[100vh] bg-gray-100">
      <div className="max-w-[1200px] mx-auto py-[100px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products?.length &&
            products?.map((product, i) => (
              <div
                key={i}
                className="p-8 rounded-lg shadow-md bg-white shadow-slate-400"
              >
                <img
                  className="w-[100px] h-[100px] mx-auto"
                  src={product?.picture}
                  alt=""
                />
                <div className="flex align-middle mb-6 gap-4 justify-center pt-4">
                  <p className="text-[20px] font-bold">${product?.price}</p>
                  <p className="text-[20px] font-bold line-through">
                    {" "}
                    ${product?.originalprice}
                  </p>
                </div>
                <Link
                  to={`/card_details/${product?._id}`}
                  className="px-5 py-3  bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 border justify-center rounded-sm flex items-center gap-2"
                >
                  <FaShoppingCart /> add to cart
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
