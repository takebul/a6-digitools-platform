import { Package, Rocket, User } from "lucide-react";
import React from "react";

const MainEnd = () => {
  return (
    <div className="bg-base-200 pb-20">
      <div className="justify-items-center space-y-3 mt-20 pt-30 mb-15">
        <h1 className="text-5xl font-semibold">Get Started in 3 Steps</h1>
        <p className="text-md font-medium text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="border-2 border-zinc-200 rounded-2xl p-4 bg-white pb-15">
          <div className="flex justify-between">
            <p></p>
            <button className="btn bg-linear-gradient text-white w-10 h-10 p-3 rounded-full font-medium">
              01
            </button>
          </div>
          <div className="justify-items-center mt-4 mb-3">
            <User
              className="bg-purple-100 p-4 rounded-full"
              size={"80px"}
              color="#9514FA"
            />
          </div>
          <div className="justify-items-center items-center space-y-3">
            <h1 className="text-2xl font-semibold">Create Account</h1>
            <p className="text-center text-gray-500 font-medium">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="border-2 border-zinc-200 rounded-2xl p-4 bg-white pb-15">
          <div className="flex justify-between">
            <p></p>
            <button className="btn bg-linear-gradient text-white w-10 h-10 p-3 rounded-full font-medium">
              02
            </button>
          </div>
          <div className="justify-items-center mt-4 mb-3">
            <Package
              className="bg-purple-100 p-4 rounded-full"
              size={"80px"}
              color="#9514FA"
            />
          </div>
          <div className="justify-items-center items-center space-y-3">
            <h1 className="text-2xl font-semibold">Choose Products</h1>
            <p className="text-center text-gray-500 font-medium">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
        <div className="border-2 border-zinc-200 rounded-2xl p-4 bg-white pb-15">
          <div className="flex justify-between">
            <p></p>
            <button className="btn bg-linear-gradient text-white w-10 h-10 p-3 rounded-full font-medium">
              03
            </button>
          </div>
          <div className="justify-items-center mt-4 mb-3">
            <Rocket
              className="bg-purple-100 p-4 rounded-full"
              size={"80px"}
              color="#9514FA"
              width={"100px"}
            />
          </div>
          <div className="justify-items-center items-center space-y-3">
            <h1 className="text-2xl font-semibold">Start Creating</h1>
            <p className="text-center text-gray-500 font-medium">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainEnd;
