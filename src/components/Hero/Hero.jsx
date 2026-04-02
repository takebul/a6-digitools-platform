import { Play } from "lucide-react";
import React from "react";
import banner from "../../assets/banner.png";

const Hero = () => {
  return (
    <section className="w-11/12 mx-auto my-18 justify-items-center space-y-6 lg:flex justify-between">
      <div className="space-y-5">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-primary-content rounded-full w-fit">
          <div className="inline-grid *:[grid-area:1/1]">
            <div className="status status-primary animate-ping"></div>
            <div className="status status-primary"></div>
          </div>
          <p className="text-linear-gradient">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h1 className="text-6xl font-bold">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-gray-500">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex items-center gap-2">
          <button className="btn bg-linear-gradient text-white rounded-full font-medium">
            Explore Products
          </button>
          <button className="btn text-linear-gradient rounded-full border-purple-500">
            <Play color="#8254d9" size={"16px"} />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="shadow-md">
        <img src={banner} alt="This is a banner image" />
      </div>
    </section>
  );
};

export default Hero;
