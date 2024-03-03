import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Load = ({ allcat, setBooking }) => {
  const { users } = useContext(AuthContext);

  const {
    name,
    price,
    _id,
    location,
    description,
    originalprice,
    sellername,
    postedtime,
    brand,
    picture,
    usedtime,
    email,
  } = allcat;

  const { data: user = {}, refetch } = useQuery({
    queryKey: ["user", email],
    queryFn: async () => {
      const res = await fetch(
        `https://old-server.vercel.app/user?email=${allcat.email}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  const [open, setOpen] = useState(false);

  const hovemouse = () => {
    setOpen(!open);
  };

  return (
    <Link
      onMouseEnter={hovemouse}
      onMouseLeave={hovemouse}
      to={`/card_details/${_id}`}
      className={`card m-3 bg-base-50   ${
        open && "border-gray-300 border-[1px]"
      }`}
    >
      <figure>
        <img
          className="w-2/3 pt-3 mx-auto h-32 lg:px-3 py-2"
          src={picture}
          alt=""
        />
      </figure>
      <div className="card-body">
        <div className="text-center">
          <h2 className="text-[20px] font-semibold text-center">{name}</h2>
          <p className="text-blue-700 font-semibold">
            ${price} <span className="line-through">{originalprice}</span>
          </p>
        </div>
        {open ? (
          <Link
            to={`/card_details/${_id}`}
            className="px-5 py-3 bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500  justify-center rounded-sm flex items-center gap-2"
          >
            See Details
          </Link>
        ) : (
          <div className=" gap-x-14  mt-3">
            <div className="flex">
              <img
                className="w-10 h-10 rounded-full"
                src={users?.image}
                alt=""
              />

              <p className="ml-3 text-sm font-bold">
                {user?.role === "seller" && user?.verify ? (
                  <>
                    <p>
                      {" "}
                      {sellername} <FaCheckCircle></FaCheckCircle>
                    </p>
                  </>
                ) : (
                  <>{sellername}</>
                )}
              </p>
              <br />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Load;
