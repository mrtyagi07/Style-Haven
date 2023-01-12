import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/1.png";

const Footer = () => {
  return (
    <div>
      <footer className="body-font bg-violet-200 text-gray-600">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
          <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
            <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="rounded-full "
              />
              <span className="ml-3 text-xl">Style Haven</span>
            </a>
            <p className="mt-2 px-4 text-sm text-gray-500">
              Find your style, find your haven
            </p>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                SHOPS
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link href={"/tshirts"} legacyBehavior>
                    <a className="text-gray-600 hover:text-gray-800">Tshirts</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/tops"} legacyBehavior>
                    <a className="text-gray-600 hover:text-gray-800">Top</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/jacket"} legacyBehavior>
                    <a className="text-gray-600 hover:text-gray-800">Jacket</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/hoodies"} legacyBehavior>
                    <a className="text-gray-600 hover:text-gray-800">Hoddies</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                POLICY
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Security</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Privacy</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                HELP
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Payments</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Shipping</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Cancellations & Returns
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">FAQ</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                REGISTERED OFFICE ADDRESS
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <p className="text-gray-600 hover:text-gray-800">
                    Style Haven Private Limited,
                  </p>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Buildings Tyagi, Delhi &
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    NCR Tech Village,
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Telephone: 011-77777777
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-violet-200">
          <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
            <p className="text-center text-sm text-gray-500 sm:text-left">
              © 2022 Style Haven —
              <a
                href="https://twitter.com/mrtyagi07"
                rel="noopener noreferrer"
                className="ml-1 text-gray-600"
                target="_blank"
              >
                @mrtyagi07
              </a>
            </p>
            <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
