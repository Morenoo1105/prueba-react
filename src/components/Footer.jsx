import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-700 text-white py-10">
      <div className="container mx-auto flex flex-col gap-4">
        <nav>
          <ul className="flex flex-row flex-wrap gap-5 justify-center sm:justify-start">
            <li className="hover:cursor-pointer hover:opacity-60">Home</li>|
            <li className="hover:cursor-pointer hover:opacity-60">
              Terms and Conditions
            </li>
            |
            <li className="hover:cursor-pointer hover:opacity-60">
              Privacy Policy
            </li>
            |
            <li className="hover:cursor-pointer hover:opacity-60">
              Collection Statement
            </li>
            |<li className="hover:cursor-pointer hover:opacity-60">Help</li>|
            <li className="hover:cursor-pointer hover:opacity-60">
              Manage Account
            </li>
          </ul>
        </nav>
        <p className="text-center sm:text-start">Copyright C 2016 DEMO Streaming. All rights Reserved </p>
        <div className="flex flex-col md:flex-row justify-between mt-10 gap-10">
          <ul className="flex flex-row justify-center sm:justify-start gap-6 [&>li]:w-8 [&>li]:h-8 [&>li]:overflow-hidden [&>li]:flex [&>li]:justify-center">
            <li className="hover:cursor-pointer hover:opacity-60">
              <img
                className="object-contain h-full"
                src="./assets/social/facebook-white.svg"
                alt=""
              />
            </li>
            <li className="hover:cursor-pointer hover:opacity-60">
              <img
                className="object-contain h-full"
                src="./assets/social/twitter-white.svg"
                alt=""
              />
            </li>
            <li className="hover:cursor-pointer hover:opacity-60">
              <img
                className="object-contain h-full"
                src="./assets/social/instagram-white.svg"
                alt=""
              />
            </li>
          </ul>

          <ul className="flex flex-col justify-center sm:justify-start sm:flex-row gap-6 [&>li]:h-10 [&>li]:overflow-hidden [&>li]:flex [&>li]:justify-center">
            <li className="hover:cursor-pointer hover:opacity-60">
              <img
                className="object-contain h-full"
                src="./assets/store/app-store.svg"
                alt=""
              />
            </li>
            <li className="hover:cursor-pointer hover:opacity-60">
              <img
                className="object-contain h-full"
                src="./assets/store/play-store.svg"
                alt=""
              />
            </li>
            <li className="hover:cursor-pointer hover:opacity-60">
              <img
                className="object-contain h-full"
                src="./assets/store/windows-store.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
