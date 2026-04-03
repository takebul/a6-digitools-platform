import { BrushCleaning } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MainCenterCart = ({ centerCart, setCenterCart }) => {
  const [checkout, setCheckout] = useState(false);
  const handleCheckout = () => {
    setCheckout(true);
    setCenterCart([]);
    toast.success("Checkout Successful");
  };

  const total = centerCart.reduce(
    (sum, centerCartItem) => sum + centerCartItem.price,
    0,
  );

  const handleRemove = (cartItem) => {
    const removeCart = centerCart.filter((remove) => remove.id !== cartItem.id);
    setCenterCart(removeCart);
    toast.error("Removed Successful");
  };

  return (
    <div className="w-11/12 mx-auto space-y-4 border-2 border-gray-200 p-6 rounded-2xl">
      <h2 className="text-3xl font-semibold">Your Cart</h2>
      {centerCart.length === 0 ? (
        <div className="justify-items-center my-20 bg-base-200 p-15 rounded-2xl border border-zinc-200 p">
          <BrushCleaning color="#6213f6" size={"150px"} />
          <p className="text-4xl p-2 font-semibold text-linear-gradient">
            Tools is Empty
          </p>
        </div>
      ) : (
        <>
          {centerCart.map((cartItem) => (
            <div key={cartItem.id}>
              <div className="flex justify-between items-center bg-base-200 p-6 rounded-2xl">
                <div>
                  <img src={cartItem.icon} alt={cartItem.name} />
                  <p className="text-2xl font-semibold">{cartItem.name}</p>
                  <p className="text-gray-500">${cartItem.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(cartItem)}
                  className="btn btn-ghost text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <p className="text-gray-500">Total:</p>
            <p className="text-2xl font-semibold">${total.toFixed(2)}</p>
          </div>
          <button
            onClick={handleCheckout}
            className={
              checkout
                ? "btn bg-green-500 text-white w-full rounded-full font-semibold"
                : "btn bg-linear-gradient text-white w-full rounded-full font-semibold"
            }
          >
            {checkout ? "Checkout Successful" : "Proceed To Checkout"}
          </button>
        </>
      )}
    </div>
  );
};

export default MainCenterCart;
