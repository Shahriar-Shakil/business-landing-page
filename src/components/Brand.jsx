"use client";
import React from "react";
import Slider from "react-slick";
export const settings = {
  className: "settings",
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Brand = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="">
            <Slider {...settings}>
              <div>
                <div className="mb-4 w-full px-2">
                  <div className="relative group py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8 relative"
                        src="atis-assets/logo/brands/slack.png"
                        alt=""
                      />
                    </a>
                    <div className="invisible group-hover:visible absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                    <div className="invisible group-hover:visible absolute inset-0 p-6 flex flex-col items-start">
                      <span className="text-gray-400">2021</span>
                      <p className="mb-auto text-sm  text-white font-bold">
                        Lorem ipsum dolor sit amet consectutar
                      </p>
                      <a
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                        href="#"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4  px-2">
                  <div className="relative group py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8"
                        src="atis-assets/logo/brands/dropbox.png"
                        alt=""
                      />
                    </a>
                    <div className="invisible group-hover:visible absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                    <div className="invisible group-hover:visible absolute inset-0 p-6 flex flex-col items-start">
                      <span className="text-gray-400">2021</span>
                      <p className="mb-auto text-sm  text-white font-bold">
                        Lorem ipsum dolor sit amet consectutar
                      </p>
                      <a
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                        href="#"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4  px-2">
                  <div className="relative group py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8"
                        src="atis-assets/logo/brands/spotify.png"
                        alt=""
                      />
                    </a>
                    <div className="invisible group-hover:visible absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                    <div className="invisible group-hover:visible absolute inset-0 p-6 flex flex-col items-start">
                      <span className="text-gray-400">2021</span>
                      <p className="mb-auto text-sm  text-white font-bold">
                        Lorem ipsum dolor sit amet consectutar
                      </p>
                      <a
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                        href="#"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full  px-2">
                  <div className="relative group py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8"
                        src="atis-assets/logo/brands/stripe.png"
                        alt=""
                      />
                    </a>
                    <div className="invisible group-hover:visible absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                    <div className="invisible group-hover:visible absolute inset-0 p-6 flex flex-col items-start">
                      <span className="text-gray-400">2021</span>
                      <p className="mb-auto text-sm  text-white font-bold">
                        Lorem ipsum dolor sit amet consectutar
                      </p>
                      <a
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                        href="#"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div>
                <div className="mb-4 w-full px-2">
                  <div className="relative group py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8 relative"
                        src="atis-assets/logo/brands/slack.png"
                        alt=""
                      />
                    </a>
                    <div className="invisible group-hover:visible absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                    <div className="invisible group-hover:visible absolute inset-0 p-6 flex flex-col items-start">
                      <span className="text-gray-400">2021</span>
                      <p className="mb-auto text-sm  text-white font-bold">
                        Lorem ipsum dolor sit amet consectutar
                      </p>
                      <a
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                        href="#"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4  px-2">
                  <div className="relative group py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8"
                        src="atis-assets/logo/brands/dropbox.png"
                        alt=""
                      />
                    </a>
                    <div className="invisible group-hover:visible absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                    <div className="invisible group-hover:visible absolute inset-0 p-6 flex flex-col items-start">
                      <span className="text-gray-400">2021</span>
                      <p className="mb-auto text-sm  text-white font-bold">
                        Lorem ipsum dolor sit amet consectutar
                      </p>
                      <a
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                        href="#"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4  px-2">
                  <div className="relative group py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8"
                        src="atis-assets/logo/brands/spotify.png"
                        alt=""
                      />
                    </a>
                    <div className="invisible group-hover:visible absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                    <div className="invisible group-hover:visible absolute inset-0 p-6 flex flex-col items-start">
                      <span className="text-gray-400">2021</span>
                      <p className="mb-auto text-sm  text-white font-bold">
                        Lorem ipsum dolor sit amet consectutar
                      </p>
                      <a
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                        href="#"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full  px-2">
                  <div className="relative group py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8"
                        src="atis-assets/logo/brands/stripe.png"
                        alt=""
                      />
                    </a>
                    <div className="invisible group-hover:visible absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                    <div className="invisible group-hover:visible absolute inset-0 p-6 flex flex-col items-start">
                      <span className="text-gray-400">2021</span>
                      <p className="mb-auto text-sm  text-white font-bold">
                        Lorem ipsum dolor sit amet consectutar
                      </p>
                      <a
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                        href="#"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
