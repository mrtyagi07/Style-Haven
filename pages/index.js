import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import NavImage from "/public/assets/Clothing Rack Boutique Fashion Facebook Cover.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Style Haven - Find your style, find your haven</title>
        <meta
          name="description"
          content="Style Haven - Find your style, find your haven."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Image src={NavImage} alt="CoverImg" />
      </div>

      <section className="body-font bg-violet-100 text-gray-900">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Find your style, find your haven
            </h1>
            <p className="w-full leading-relaxed text-gray-800 lg:w-1/2">
              Welcome to our online clothing store! We offer a wide selection of
              stylish and affordable clothing for men, women, and children. Our
              goal is to make it easy for you to find the perfect outfit, no
              matter what your personal style is.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Shooting Stars
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  The Catalyzer
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Neptune
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Melanchole
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Bunker
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Ramona Falls
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
          <button className="mx-auto mt-16 flex rounded border-0 bg-violet-500 py-2 px-8 text-lg text-white hover:bg-violet-600 focus:outline-none">
            Button
          </button>
        </div>
      </section>
    </div>
  );
}
