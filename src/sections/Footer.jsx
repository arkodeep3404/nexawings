import React from "react";
import { socials } from "../constants/index.jsx";

const Footer = ({ onOpenPrivacy }) => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col items-center justify-between gap-5 border-t border-s3/20 pt-10">
          
          <div className="small-compact flex flex-col md:flex-row items-center gap-5">
            <p className="opacity-70 text-xs">
              Copyright @ NexaWings International 2026. All Rights Reserved
            </p>
          </div>

          <div className="flex items-center justify-center md:ml-auto">
            <p 
              onClick={onOpenPrivacy}
              className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer text-xs"
            >
              Privacy Policy
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
