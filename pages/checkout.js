import Link from "next/link";
import React from "react";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill, BsFillBagFill } from "react-icons/bs";

const Checkout = ({
  cart,
  subTotal,
  addToCart,
  removeFromCart,
  toggleCart,
}) => {
  return (
    <div className="container m-auto bg-violet-100  text-gray-700">
      <h1 className="py-8 text-center text-3xl font-bold">Checkout</h1>
      <h2 className="text-xl font-bold">1. Delivery Details</h2>
      <div className=" mx-auto flex">
        <div className="w-1/2 px-2">
          <div class=" py-2">
            <label for="name" class="text-sm leading-7 text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>
        <div className="w-1/2 px-2">
          <div class=" py-2">
            <label for="email" class="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-2">
        <label for="address" class="text-sm leading-7 text-gray-600">
          Address
        </label>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="2"
          class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        ></textarea>
      </div>
      <div className=" mx-auto flex">
        <div className="w-1/2 px-2">
          <div class="py-2">
            <label for="phone" class="text-sm leading-7 text-gray-600">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>
        <div class="py-2">
          <label for="city" class="text-sm leading-7 text-gray-600">
            City
          </label>
          <input
            type="number"
            id="city"
            name="city"
            class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>
      <div className=" mx-auto flex">
        <div className="w-1/2 px-2">
          <div class="py-2">
            <label for="phone" class="text-sm leading-7 text-gray-600">
              State
            </label>
            <input
              type="number"
              id="state"
              name="state"
              class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>
        <div class="py-2">
          <label for="pincode" class="text-sm leading-7 text-gray-600">
            Pincode
          </label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>
      <h2 className="text-xl font-bold">1. Review Cart Items</h2>
      <div className="sideCart z-10  bg-violet-300 p-6 ">
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
                  <div className="font-semibold ">
                    {cart[k].name} ({cart[k].size / cart[k].variant})
                  </div>
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
          <span className="total">Subtotal:₹{subTotal}</span>
        </ol>
      </div>
      <div className="m-auto flex justify-center p-4">
        <Link href="/order">
          <button className=" mr-2 flex items-center gap-2 rounded border-0 bg-violet-600 py-2 px-2 text-sm text-white hover:bg-violet-700 focus:outline-none">
            <BsFillBagCheckFill /> Pay ₹{subTotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
