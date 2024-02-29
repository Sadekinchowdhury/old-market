import React, { useEffect, useState } from "react";
import AddvirtisCardModal from "../AddvirtisCardModal/AddvirtisCardModal";
import AddvirtisCard from "../AdvirtisCard/AddvirtisCard";

const Addvirtize = () => {
  const [booking, setBooking] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://old-server.vercel.app/advertise/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="max-w-[1200px]  px-[20px] mx-auto pt-5 pb-10">
      <div className="py-5">
        <p className="text-2xl text-black font-bold"> Recent Product </p>
        <hr className="border pl-4 border-black w-2/5 " />
      </div>
      <div className="grid m-3 gap-7 h-1/2  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products?.slice(0, 8).map((product) => (
          <AddvirtisCard
            key={product._id}
            product={product}
            setBooking={setBooking}
          ></AddvirtisCard>
        ))}
      </div>
      {booking && (
        <AddvirtisCardModal
          booking={booking}
          setBooking={setBooking}
        ></AddvirtisCardModal>
      )}
    </section>
  );
};

export default Addvirtize;
