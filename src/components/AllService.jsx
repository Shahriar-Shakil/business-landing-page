"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/framer-varients";

const imageSources = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
  "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80",
  "https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1127&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
];
function AllService() {
  const elements = imageSources.map((src, index) => (
    <motion.div
      variants={staggerContainer(index)}
      initial="initial"
      whileInView="whileInView"
      className="relative group w-full md:w-1/2 lg:w-1/3 mb-8 px-4"
      key={index}
    >
      <a href="#">
        <img
          className="h-80 w-full mx-auto object-cover rounded"
          src={src}
          alt={`Image ${index}`}
        />
      </a>
      <div className="invisible group-hover:visible group absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
      <div className="invisible group-hover:visible group absolute inset-0 p-6 flex flex-col items-start">
        <span className="text-gray-400">2021</span>
        <p className="mb-auto text-xl lg:text-2xl text-white font-bold">
          Lorem ipsum dolor sit amet consectutar
        </p>
        <a
          className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
          href="#"
        >
          View Project
        </a>
      </div>
    </motion.div>
  ));
  return (
    <>
      <section id="service">
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
              <div className="text-center lg:text-left">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  All Service
                </h2>
              </div>
              <a
                className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                href="#"
              >
                View More Projects
              </a>
            </div>
            <div className="flex flex-wrap -mx-4 mb-4">{elements}</div>
            <div className="text-center">
              <a
                className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                href="#"
              >
                View More Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllService;
