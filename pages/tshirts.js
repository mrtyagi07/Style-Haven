import mongoose from "mongoose";
import Product from "../models/Product";

import Link from "next/link";
import React from "react";
const dotenv = require("dotenv");

const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="body-font bg-violet-100 text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap justify-center">
            {Object.keys(products).map((item) => {
              return (
                <Link
                  passHref={true}
                  key={products[item]._id}
                  href={`/product/${products[item].slug}`}
                  className="m-2  shadow-lg"
                  legacyBehavior
                >
                  <div className="m-5 w-full cursor-pointer p-4 text-center shadow-lg md:w-1/2 lg:w-1/5">
                    <a className="relative block   overflow-hidden rounded">
                      <img
                        alt="ecommerce"
                        className="m-auto block h-[36vh]  md:m-0"
                        src={products[item].img}
                      />
                    </a>
                    <div className=" mt-4">
                      <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                        {products[item].title}
                      </h3>
                      <h2 className="title-font text-lg font-medium text-gray-900">
                        {products[item].slug}
                      </h2>
                      <p className="mt-1">{products[item].price}</p>
                      <div className="mt-1">
                        {products[item].size.includes("S") && (
                          <span className="mx-1 border border-gray-600 px-1">
                            S
                          </span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="mx-1 border border-gray-600 px-1">
                            M
                          </span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="mx-1 border border-gray-600 px-1">
                            L
                          </span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="mx-1 border border-gray-600 px-1">
                            XL
                          </span>
                        )}
                        {products[item].size.includes("XXL") && (
                          <span className="mx-1 border border-gray-600 px-1">
                            XXL
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        {products[item].color.includes("red") && (
                          <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-red-700 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("blue") && (
                          <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-blue-700 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("black") && (
                          <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-black focus:outline-none"></button>
                        )}
                        {products[item].color.includes("green") && (
                          <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-700 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("yellow") && (
                          <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-yellow-700 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("purple") && (
                          <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-purple-700 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  dotenv.config({ path: "../.env" });
  const DB = process.env.DATABASE;
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  let products = await Product.find({ category: "tshirt" });

  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        itMatchesOne.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  };
}

export default Tshirts;
