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
import { BsFillBagCheckFill, BsFillBagFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

import logo from "../public/assets/1.png";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
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
    <div className="sticky top-0 z-10 flex flex-col items-center justify-center bg-violet-200 py-2 text-gray-900 shadow-xl md:flex-row md:justify-start">
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
      <div className="cart absolute right-0 top-4 mx-5 flex cursor-pointer items-center justify-center">
        <Link href="/login">
          <RiAccountCircleFill size={30} className="mx-2" />
        </Link>
        <AiOutlineShoppingCart onClick={toggleCart} size={30} />
      </div>

      <div
        ref={ref}
        className={`sideCart absolute top-0 right-0 z-10 h-[100vh] w-72 ${
          Object.keys(cart).length === 0 ? "translate-x-full" : "translate-x-0"
        }  transform bg-violet-300 px-8 py-10 transition-transform`}
      >
        <h2 className="text-center text-xl font-bold">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer text-violet-600 "
        >
          <AiFillCloseCircle size={30} />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 mt-10 flex flex-col items-center gap-[50px] font-semibold ">
              Your Cart is empty. <BsFillBagFill size={100} className="" />
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item my-5 flex">
                  <div className="w-2/3 font-semibold ">{cart[k].name}</div>
                  <div className="flex w-1/3 items-center justify-center text-lg font-semibold">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant,
                        );
                      }}
                      className=" cursor-pointer text-violet-500"
                    />
                    <span className="mx-2 text-sm">{cart[k].qty}</span>{" "}
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant,
                        );
                      }}
                      className="cursor-pointer text-violet-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        {!Object.keys(cart).length == 0 && (
          <div className="flex ">
            <Link href="/checkout">
              <button className=" mr-2 flex items-center gap-2 rounded border-0 bg-violet-600 py-2 px-2 text-sm text-white hover:bg-violet-700 focus:outline-none">
                <BsFillBagCheckFill /> Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="mr-2 flex rounded border-0 bg-violet-600 py-2 px-2 text-sm text-white hover:bg-violet-700 focus:outline-none"
            >
              Clear cart
            </button>
          </div>
        )}
        <div className="flex">
          {" "}
          <span className="total p-4 font-bold">Subtotal:₹{subTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
