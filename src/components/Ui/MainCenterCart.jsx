import React from "react";

const MainCenterCart = ({ digiTools, digiToolsProduct, setToolsProduct }) => {
  return (
    <div className="w-11/12 mx-auto space-y-4 border-2 border-gray-200 p-6 rounded-2xl">
      <h2 className="text-3xl font-semibold">Your Cart</h2>
      <div className="flex justify-between items-center bg-base-200 p-6 rounded-2xl">
        <div>
          <img src={digiTools.icon} alt={digiTools.name} />
          <p className="text-2xl font-semibold">{digiTools.name}</p>
          <p className="text-gray-500">${digiTools.price}</p>
        </div>
        <button className="btn btn-ghost text-red-500">Remove</button>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Total:</p>
        <p className="text-2xl font-semibold">$20</p>
      </div>
      <button className="btn bg-linear-gradient text-white w-full rounded-full font-medium">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default MainCenterCart;
