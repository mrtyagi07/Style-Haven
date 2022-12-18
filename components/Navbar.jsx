import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../public/assets/1.png";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-violet-200 py-2 text-gray-900 shadow-xl md:flex-row md:justify-start">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image
            width={50}
            height={20}
            src={logo}
            alt="logo"
            className="cursor-pointer rounded-full"
          />
        </Link>
      </div>
      <div className="nav ">
        <ul className="md:text-md flex items-center space-x-6 font-bold">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/tshirts"}>
            <li>T-shirts</li>
          </Link>
          <Link href={"/jacket"}>
            <li>Jacket</li>
          </Link>
          <Link href={"/tops"}>
            <li>Tops</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart size={40} />
      </div>
    </div>
  );
};

export default Navbar;
