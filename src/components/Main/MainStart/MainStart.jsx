import React from "react";

const MainStart = () => {
  return (
    <div>
      <div className="justify-items-center mt-18 mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-center text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div>
          <button className="btn bg-linear-gradient text-white rounded-full">
            Product
          </button>
          <button className="btn btn-ghost">Cart(2)</button>
        </div>
      </div>
    </div>
  );
};

export default MainStart;
