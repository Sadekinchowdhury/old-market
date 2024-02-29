import { motion } from "framer-motion";
import React from "react";
import Shopings from "../../Shoping/Shopings";
import Addvirtize from "../AdvirtiseItem/Addvirtize";
import BannerSlider from "./BannerSlider";
import CategorySlide from "./CategorySlide";
import CompanyLogo from "./CompanyLogo/CompanyLogo";
import HeroBanner from "./HeroBanner/HeroBanner";
import Product from "./Product";

const Home = () => {
  return (
    <motion.div className="overflow-hidden">
      {/* hero banner slider
       */}
      <motion.div>
        <BannerSlider />
      </motion.div>
      <motion.div className="py-12 max-w:[700px] mx-auto">
        <Shopings></Shopings>
      </motion.div>
      <CategorySlide />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <Product />
      </motion.div>
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
        exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
      >
        <HeroBanner />
      </motion.div>
      <CompanyLogo />
      <Addvirtize></Addvirtize>
    </motion.div>
  );
};

export default Home;
