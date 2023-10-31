"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerForFooterMenu } from "@/utils/framer-varients";

const products = [
  { text: "Services", link: "#" },
  { text: "About Us", link: "#" },
  { text: "News and Stories", link: "#" },
  { text: "Roadmap", link: "#" },
];
const importantLinks = [
  { text: "Organization Team", link: "#" },
  { text: "Our Journeys", link: "#" },
  { text: "Pricing Plans", link: "#" },
  { text: "Roadmap", link: "#" },
  { text: "Terms & Conditions", link: "#" },
  { text: "Privacy Policy", link: "#" },
];
const company = [
  { text: "About Us", link: "#" },
  { text: "Jobs", link: "#" },
  { text: "Press", link: "#" },
  { text: "Contact Us", link: "#" },
];
const Footer = () => {
  return (
    <>
      <section>
        <div className="py-20 bg-gray-200 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
                <a
                  className="inline-block mb-3 text-3xl font-bold leading-none"
                  href="#"
                >
                  <img
                    className="h-12"
                    src="atis-assets/logo/atis/atis-mono-black.svg"
                    alt=""
                    width="auto"
                  />
                </a>
                <p className="mb-4 max-w-sm text-gray-400 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus tincidunt felis eu est.
                </p>
                <div>
                  <a
                    className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                    href="#"
                  >
                    <img
                      className="mx-auto"
                      src="atis-assets/social/facebook.svg"
                    />
                  </a>
                  <a
                    className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                    href="#"
                  >
                    <img
                      className="mx-auto"
                      src="atis-assets/social/twitter.svg"
                    />
                  </a>
                  <a
                    className="inline-block w-10 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                    href="#"
                  >
                    <img
                      className="mx-auto"
                      src="atis-assets/social/instagram.svg"
                    />
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                  <h3 className="mb-6 text-2xl font-bold">Products</h3>
                  <ul>
                    {" "}
                    {products.map((item, index) => (
                      <motion.li
                        variants={staggerForFooterMenu(index)}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: false }}
                        whileHover={{
                          scale: 1.1,
                          originX: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        key={index}
                        className={index < products.length - 1 ? "mb-4" : ""}
                      >
                        <a
                          className="text-gray-800 hover:text-gray-600"
                          href={item.link}
                        >
                          {item.text}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                  <h3 className="mb-6 text-2xl font-bold">Important Links</h3>
                  <ul>
                    {importantLinks.map((item, index) => (
                      <motion.li
                        variants={staggerForFooterMenu(index)}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: false }}
                        whileHover={{
                          scale: 1.1,
                          originX: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        key={index}
                        className={
                          index < importantLinks.length - 1 ? "mb-4" : ""
                        }
                      >
                        <a
                          className="text-gray-800 hover:text-gray-600"
                          href={item.link}
                        >
                          {item.text}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-auto">
                  <h3 className="mb-6 text-2xl font-bold">Company</h3>
                  <ul>
                    {company.map((item, index) => (
                      <motion.li
                        variants={staggerForFooterMenu(index)}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: false }}
                        whileHover={{
                          scale: 1.1,
                          originX: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        key={index}
                        className={index < company.length - 1 ? "mb-4" : ""}
                      >
                        <a
                          className="text-gray-800 hover:text-gray-600"
                          href={item.link}
                        >
                          {item.text}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <p className="lg:text-center text-sm text-gray-400 border-t border-gray-100 pt-12 mt-16">
              © 2021. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
