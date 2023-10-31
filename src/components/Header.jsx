"use client";
import Link from "next/link";

import { useLocomotiveScroll } from "react-locomotive-scroll";

function Header() {
  const { scroll } = useLocomotiveScroll();

  return (
    <section className="relative bg-white ">
      <div className="container mx-auto">
        <nav className="relative px-6 py-6 flex justify-between items-center z-10">
          <Link className="text-3xl font-bold leading-none" href="/">
            <img
              className="h-12"
              src="atis-assets/logo/atis/atis-mono-black.svg"
              alt=""
              width="auto"
            />
          </Link>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a
                className="text-sm text-gray-400 hover:text-gray-500"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a
                className="text-sm text-gray-400 hover:text-gray-500"
                onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollTo("#workList");
                }}
              >
                Work List
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a
                className="text-sm text-gray-400 hover:text-gray-500"
                onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollTo("#FeaturedProject");
                }}
              >
                Featured Project
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollTo("#service");
                }}
                className="text-sm text-gray-400 hover:text-gray-500"
              >
                Service
              </a>
            </li>

            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollTo("#testimonials");
                }}
                className="text-sm text-gray-400 hover:text-gray-500"
              >
                Testimonials
              </a>
            </li>
          </ul>
          <a
            onClick={(e) => {
              e.preventDefault();
              scroll.scrollTo("#contacts");
            }}
            className="hidden lg:inline-block py-4 px-6 bg-green-100 hover:bg-green-500 text-sm text-green-600 hover:text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Header;
