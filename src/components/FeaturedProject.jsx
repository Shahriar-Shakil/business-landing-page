"use client";
import React from "react";

const FeaturedProject = () => {
  return (
    <>
      <section id="FeaturedProject">
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                <div className="max-w-md">
                  <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                    ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট
                  </h2>
                  <div className="mb-6 max-w-sm">
                    <p className="text-gray-500 leading-loose">
                      ওয়েব ডেভেলপার হওয়ার স্বপ্ন এবার হবে পূরণ। সম্পূর্ণ ফ্রন্ট
                      ও ব্যাক এন্ড ডেভেলপমেন্ট শেখা হবে শূন্য থেকেই
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:-ml-5">
                    <button className="lg:w-auto py-2 px-6 leading-loose lg:ml-5 text-gray-50 font-bold bg-green-600 hover:bg-green-700 transition duration-200 rounded-l-xl rounded-t-xl">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mb-4 flex flex-wrap items-end">
                  <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                    <img
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="https://images.unsplash.com/photo-1604701145653-ab3c97c63467?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                      alt=""
                    />
                  </div>
                  <div className="w-full lg:w-1/3 px-3">
                    <img
                      className="w-full h-32 object-cover rounded"
                      src="https://images.unsplash.com/photo-1521581171443-58a6b508b9ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-start">
                  <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                    <img
                      className="w-full h-32 object-cover rounded"
                      src="https://images.unsplash.com/photo-1501706649056-3cb79cccec52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
                      alt=""
                    />
                  </div>
                  <div className="w-full lg:w-2/3 px-3">
                    <img
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="https://images.unsplash.com/photo-1489058535093-8f530d789c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProject;
