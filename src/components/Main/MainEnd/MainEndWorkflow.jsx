import React from "react";

const MainEndWorkflow = () => {
  return (
    <div className="bg-linear-gradient text-white mt-4 py-20">
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-semibold">
          Ready to Transform Your Workflow?
        </h1>
        <p className="font-light text-sm text-neutral-200">
          Join thousands of professionals who are already using DigiTools to
          work smarter. <br /> Start your free trial today.
        </p>
        <div className="">
          <button className="btn rounded-full py-1 text-purple-700 mr-3">
            Explore Products
          </button>
          <button className="btn rounded-full py-1 bg-linear-gradient text-white">
            View Pricing
          </button>
        </div>
        <p className="text-neutral-300">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default MainEndWorkflow;
