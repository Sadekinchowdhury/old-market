import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { data: categoryProduct = [], refetch } = useQuery({
    queryKey: ["categoris"],
    queryFn: async () => {
      const res = await fetch("https://old-server.vercel.app/categoris");
      const data = await res.json();

      return data;
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
      className="max-w-[1200px]  px-[20px] lg:py-5 mx-auto"
    >
      <div>
        <h1 className="text-2xl text-center font-bold  text-black py-2">
          Top Category{" "}
        </h1>
        <hr className="border w-4/12 mx-auto  border-gray-200" />
      </div>

      <div className="grid grid-cols-6 gap-10 ">
        {categoryProduct.length &&
          categoryProduct?.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
      </div>
    </motion.div>
  );
};

export default Category;
