import React from "react";

const Stat = () => {
  return (
    <section className="flex justify-center gap-8 my-10 divide-x divider-horizontal divide-primary-content bg-linear-gradient text-white p-4 lg:p-8">
      <div className="px-4 justify-items-center lg:px-20 space-y-2">
        <h1 className="text-2xl font-semibold lg:text-5xl">50K+</h1>
        <p className="text-center lg:font-medium">Active Users</p>
      </div>

      <div className="px-4 justify-items-center lg:px-20 space-y-2">
        <h1 className="text-2xl font-semibold lg:text-5xl">200+</h1>
        <p className="text-center lg:font-medium">Premium Tools</p>
      </div>
      <div className="px-4 justify-items-center lg:px-20 space-y-2">
        <h1 className="text-2xl font-semibold lg:text-5xl">4.9</h1>
        <p className="text-center lg:font-medium">Rating</p>
      </div>
    </section>
  );
};

export default Stat;
