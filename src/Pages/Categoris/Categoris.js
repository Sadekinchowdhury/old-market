import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Load from "./Load";
import Modal from "./Loadcard/Modals";

const AllCategoris = () => {
  const allCategory = useLoaderData();

  const [booking, setBooking] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const numberOfTotalPage = Math.ceil(allCategory.length / postPerPage);
  const pages = [...Array(numberOfTotalPage + 1).keys()].slice(1);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = allCategory.slice(lastPostIndex, firstPostIndex);
  return (
    <section className="max-w-[1200px]  px-[20px] mx-auto">
      <div className="py-6">
        <p className="text-3xl   font-bold pl-2 py-3">Best For you</p>
        <hr />
      </div>
      <div className="grid gap-5 h-1/2  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {allCategory?.map((allcat) => (
          <Load key={allcat._id} allcat={allcat} setBooking={setBooking}></Load>
        ))}
      </div>
      <div className="w-2/5 mt-5 mb-5 mx-auto">
        {pages.map((page, index) => {
          return (
            <button
              className="btn btn-active ml-3"
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>

      {booking && <Modal booking={booking} setBooking={setBooking}></Modal>}
    </section>
  );
};

export default AllCategoris;
