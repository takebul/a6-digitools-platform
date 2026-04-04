import { ShoppingCart } from "lucide-react";

import MainCenterCart from "../Ui/MainCenterCart";

const Navbar = ({ centerCart }) => {
  const handleCart = () => {
    console.log("cart clicked");
  };

  return (
    <div className="border-b border-gray-300">
      <div className="navbar bg-base-100  lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <a className="cursor-pointer text-3xl py-8 font-bold text-linear-gradient lg:text-4xl">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold flex-row gap-1">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex flex-row gap-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <button onClick={handleCart} className="indicator">
              <ShoppingCart className="w-4 h-auto lg:w-6" />
              <span
                className={
                  centerCart.length === 0
                    ? ""
                    : "badge badge-sm indicator-item bg-red-500 w-5 h-5 text-white"
                }
              >
                {centerCart.length === 0 ? "" : centerCart.length}
              </span>
            </button>
          </div>
          <button className="hidden md:block btn btn-ghost rounded-full">
            Login
          </button>
          <button className="btn rounded-full bg-linear-gradient text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
