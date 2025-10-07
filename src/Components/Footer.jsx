import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-linear-180 from-blue-900 to-black purple-900 text-white p-10">
      <aside>
        <figure className="w-20">
          <img src={logo} alt="" />
        </figure>
        <p className="font-bold text-2xl">
          HeroApp Ltd.
          <br />
        </p>
        <p>Providing best quality since 1992</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Facebook></Facebook>
          <Instagram></Instagram>
          <Linkedin></Linkedin>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
