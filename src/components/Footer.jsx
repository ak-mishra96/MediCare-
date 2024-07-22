import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi"; // Import icons from react-icons



const Footer = () => {
  return (
    <div>
      <footer className="font-sans tracking-wide bg-slate-900 px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          <div>
            <a href="/">
              <img
                src="https://www.logomaker.com/wp-content/uploads/2018/06/first-aid-symbol-picture-id816820042.jpg"
                alt="Hospital Logo"
                className="w-44"
              />
            </a>

            <ul className="mt-10 flex space-x-5">
              <li>
                <a href="/">
                  <FiFacebook
                    size={28}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiTwitter
                    size={28}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiInstagram
                    size={28}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiLinkedin
                    size={28}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiMail
                    size={28}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Services
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Medical Services
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Emergency Care
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Telemedicine
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Patient Support
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Health Checkups
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
              About
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  News
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Contact
            </h4>

            <ul className="mt-6 space-y-5">
              <li className="flex items-center">
                <FiPhone size={20} className="text-gray-300 mr-2" />
                <span className="hover:text-white text-gray-300 text-sm">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center">
                <FiMapPin size={20} className="text-gray-300 mr-2" />
                <span className="hover:text-white text-gray-300 text-sm">
                  123 Hospital St, City
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Follow
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Partners
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white text-gray-300 text-sm">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-400" />

        <div className="flex flex-wrap max-md:flex-col gap-4">

          <p className="text-gray-300 text-sm md:ml-auto">
            Copyright © 2024
            <a
              href="/"
              className="hover:underline mx-1">
              Arun Yadav
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
