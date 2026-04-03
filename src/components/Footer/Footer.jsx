import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#101727] pt-20 pb-7">
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-4 gap-y-10 lg:grid-cols-6">
          <div className="space-y-4 md:col-span-2">
            <h1 className="text-white text-5xl font-bold">DigiTools</h1>
            <p className="text-neutral-400">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-white font-light text-3xl">Product</h1>
            <p className="text-neutral-400">Features</p>
            <p className="text-neutral-400">Pricing</p>
            <p className="text-neutral-400">Templates</p>
            <p className="text-neutral-400">Integrations</p>
          </div>
          <div className="space-y-4">
            <h1 className="text-white font-light text-3xl">Company</h1>
            <p className="text-neutral-400">About</p>
            <p className="text-neutral-400">Blog</p>
            <p className="text-neutral-400">Careers</p>
            <p className="text-neutral-400">Press</p>
          </div>
          <div className="space-y-4">
            <h1 className="text-white font-light text-3xl">Resources</h1>

            <p className="text-neutral-400">Documentation</p>
            <p className="text-neutral-400">Help Center</p>
            <p className="text-neutral-400">Community</p>
            <p className="text-neutral-400">Contact</p>
          </div>

          <div className="space-y-4">
            <h1 className="text-white font-light text-3xl">Social Links</h1>
            <div className="flex gap-3">
              <p>
                <a href="">
                  <RiInstagramFill
                    className="bg-white p-2 rounded-full"
                    size={"55px"}
                  />
                </a>
              </p>
              <p>
                <a href="">
                  <FaFacebookSquare
                    className="bg-white p-2 rounded-full"
                    size={"55px"}
                  />
                </a>
              </p>
              <p>
                <a href="">
                  <FaXTwitter
                    className="bg-white p-2 rounded-full"
                    size={"55px"}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr className="divider text-neutral-500 mt-16 mb-6" />

        <div className="grid gap-y-6 lg:flex justify-between text-neutral-500">
          <div>
            <p> &copy; 2026 DigiTools. All rights reserved.</p>
          </div>
          <div className="flex lg:flex gap-8">
            <p>
              <a href="">Privacy Policy</a>
            </p>
            <p>
              <a href="">Terms of Service</a>
            </p>
            <p>
              <a href="">Cookies</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
