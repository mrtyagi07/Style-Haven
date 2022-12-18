import { useRouter } from "next/router";
import React, { useState } from "react";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const checkServiceAbility = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    pinJson.includes(pin) ? setService(true) : setService(false);
  };

  const onChangePin = (e) => {
    setPin(+e.target.value);
  };

  return (
    <div>
      <section class="body-font overflow-hidden bg-violet-100 text-gray-600">
        <div class="container mx-auto px-5 py-16">
          <div class="mx-auto flex flex-wrap lg:w-4/5">
            <img
              alt="ecommerce"
              class="w-full rounded object-cover object-top px-24 lg:h-auto lg:w-1/2"
              src="https://images.unsplash.com/photo-1523585298601-d46ae038d7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h2 class="title-font text-sm tracking-widest text-gray-500">
                BRAND NAME
              </h2>
              <h1 class="title-font mb-1 text-3xl font-medium text-gray-900">
                The Catcher in the Rye
              </h1>
              <div class="mb-4 flex">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-4 w-4 text-violet-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-4 w-4 text-violet-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-4 w-4 text-violet-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-4 w-4 text-violet-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-4 w-4 text-violet-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="ml-3 text-gray-600">4 Reviews</span>
                </span>
                <span class="space-x-2s ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div class="mt-6 mb-5 flex items-center border-b-2 border-gray-100 pb-5">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  <button class="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                  <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                  <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-violet-500 focus:outline-none"></button>
                </div>
                <div class="ml-6 flex items-center">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select class="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font text-2xl font-medium text-gray-900">
                  $58.00
                </span>
                <button class="ml-14 flex rounded border-0 bg-violet-500 py-2 px-6 text-white hover:bg-violet-600 focus:outline-none">
                  Button
                </button>
                <button class="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2">
                <input
                  onChange={onChangePin}
                  className="rounded-md border-2 px-2"
                  type="number"
                  maxlength="6"
                  required
                  placeholder="Enter your Pincode"
                />
                <button
                  onClick={checkServiceAbility}
                  class="ml-14 flex rounded border-0 bg-violet-500 py-2 px-6 text-white hover:bg-violet-600 focus:outline-none"
                >
                  check
                </button>
              </div>
              {!service && service != null && (
                <div className="mt-3 text-sm text-red-700">
                  Sorry! We do not deliver to this pincode yet
                </div>
              )}
              {service && service != null && (
                <div className="mt-3 text-sm text-green-700">
                  Yay! We can deliver to this pincode
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slug;
