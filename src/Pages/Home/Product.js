import { HeartOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://old-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [open, setOpen] = useState(false);

  const hovemouse = () => {
    setOpen(!open);
  };

  return (
    <>
      {products && (
        <motion.div className="max-w-[1200px]  px-[20px] mx-auto">
          <h2 className="text-2xl font-poppins font-semibold">
            Feature Products
          </h2>
          <hr className="border border-black w-1/4 my-2" />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
            className="grid py-[50px]  grid-cols-1 lg:grid-cols-4 gap-8  "
          >
            {products.slice(0, 8).map((product, i) => (
              <Link
                key={i}
                to={`/card_details/${product._id}`}
                className="relative border-transparent border  hover:scale-105   transition hover:opacity-80 duration-300 hover:shadow-2xl hover:border-gray-300 hover:border   rounded-md  ease-in-out"
              >
                <HeartOutlined className="absolute top-2 text-yellow-600 right-2" />
                <div className="py-5">
                  <img
                    className="min-h-[140px] max-h-[140px] max-w-[140px] object-cover mx-auto"
                    src={product.picture}
                    alt=""
                  />
                </div>

                <motion.div className="">
                  <span className="text-[12px]  pl-3">{product.category}</span>
                  <motion.div
                    className="flex flex-col 
                            items-center text-center py-4"
                  >
                    <h4 className="font-semibold text-[18px]">
                      {product.name}
                    </h4>
                    <motion.div className="flex gap-2">
                      <p className="text-xl line-through font-semibold">
                        ${product.price}
                      </p>
                      <p className="text-xl  font-semibold">${product.price}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Product;
