import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/2-removebg-preview.png";

const Forgot = () => {
  return (
    <div>
      <section class="bg-violet-100 text-gray-600">
        <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 text-gray-700 md:h-screen lg:py-0">
          <Link
            href="/"
            class="mb-6 flex items-center text-2xl font-semibold text-violet-700"
          >
            <Image class="mr-2 h-[80px] w-[80px]" src={logo} alt="logo" />
            Style Haven
          </Link>
          <div class="w-full rounded-lg bg-violet-300 shadow  sm:max-w-md md:mt-0 xl:p-0">
            <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
                Forgot Password
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-violet-100 p-2.5 text-gray-900  sm:text-sm"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <Link href="">
                  <button
                    type="submit"
                    class="hover:bg-primary-700 focus:ring-primary-300 mt-4 w-full rounded-lg bg-violet-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                  >
                    Forgot password
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forgot;
