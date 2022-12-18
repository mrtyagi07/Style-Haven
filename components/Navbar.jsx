import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

import logo from "../public/assets/1.png";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
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
      <div
        onClick={toggleCart}
        className="cart absolute right-0 top-4 mx-5 cursor-pointer"
      >
        <AiOutlineShoppingCart size={40} />
      </div>

      <div
        ref={ref}
        className="sideCart absolute top-0 right-0 z-10 h-full w-72 translate-x-full transform bg-violet-300 px-8 py-10 transition-transform"
      >
        <h2 className="text-center text-xl font-bold">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer text-violet-600 "
        >
          <AiFillCloseCircle size={30} />
        </span>
        <ol className="list-decimal font-semibold">
          <li className="">
            <div className="item my-5 flex">
              <div className="w-2/3 ">
                T-shirt - Find your style, find your haven
              </div>
              <div className="flex w-1/3 items-center justify-center font-semibold">
                1
              </div>
            </div>
          </li>
          <li className="">
            <div className="item my-5 flex">
              <div className="w-2/3 ">
                T-shirt - Find your style, find your haven
              </div>
              <div className="flex w-1/3 items-center justify-center font-semibold">
                <AiFillMinusCircle className="mx-1 cursor-pointer  text-2xl text-violet-600" />{" "}
                1{" "}
                <AiFillPlusCircle className="mx-1 cursor-pointer text-2xl text-violet-600" />
              </div>
            </div>
          </li>
          <li className="">
            <div className="item my-5 flex">
              <div className="w-2/3 ">
                T-shirt - Find your style, find your haven
              </div>
              <div className="flex w-1/3 items-center justify-center font-semibold">
                1
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
          <button className=" mr-2 flex items-center gap-2 rounded border-0 bg-violet-600 py-2 px-2 text-sm text-white hover:bg-violet-700 focus:outline-none">
            <BsFillBagCheckFill /> Checkout
          </button>
          <button className="mr-2 flex rounded border-0 bg-violet-600 py-2 px-2 text-sm text-white hover:bg-violet-700 focus:outline-none">
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
