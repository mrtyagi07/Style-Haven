import React from "react";

const order = () => {
  return (
    <section class="body-font overflow-hidden bg-violet-100 text-gray-600  ">
      <div class="container mx-auto px-5 py-24">
        <div class="mx-auto flex flex-wrap lg:w-4/5">
          <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
            <h2 class="title-font text-sm tracking-widest text-gray-500">
              STYLE HAVEN
            </h2>
            <h1 class="title-font mb-4 text-3xl font-medium text-gray-900">
              Order Id: #7777777
            </h1>
            <div class="mb-4 flex">
              <a class="flex-grow border-b-2 border-violet-500 py-2 px-1 text-lg text-violet-500">
                Item Description
              </a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 px-1 text-lg">
                Quantity
              </a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 px-1 text-lg">
                Item Total
              </a>
            </div>

            <p class="mb-4 leading-relaxed">
              Your order has been successfullu placed!
            </p>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">
                Find your style, find your haven(XL/Black)
              </span>
              <span class="ml-auto text-gray-900">1</span>
              <span class="ml-auto text-gray-900">499</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">
                Find your style, find your haven(XL/Red)
              </span>
              <span class="ml-auto text-gray-900">2</span>
              <span class="ml-auto text-gray-900">499</span>
            </div>
            <div class="mb-6 flex border-t border-b border-gray-200 py-2">
              <span class="text-gray-500">
                Find your style, find your haven(XL/Gray)
              </span>
              <span class="ml-auto text-gray-900">4</span>
              <span class="ml-auto text-gray-900">499</span>
            </div>
            <div class="flex">
              <span class="title-font text-2xl font-medium text-gray-900">
                Subtotal: ₹1158.00
              </span>
              <button class="ml-auto flex rounded border-0 bg-violet-500 py-2 px-6 text-white hover:bg-violet-600 focus:outline-none">
                Track order
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            class="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default order;
