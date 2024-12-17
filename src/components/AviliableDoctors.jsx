import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../index";
import { Navigate } from "react-router-dom";
import { BiMaleFemale } from "react-icons/bi";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaBirthdayCake,
  FaIdCard,
  FaBuilding,
} from "react-icons/fa";
import { url } from "../Api";

const AviliableDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [visibleDoctors, setVisibleDoctors] = useState(6); // Initial visible count
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(`${url}/user/doctors`, {
          withCredentials: true,
        });
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch doctors");
      }
    };
    fetchDoctors();
  }, []);

  // Show more doctors on button click
  const handleLoadMore = () => {
    setVisibleDoctors((prevCount) => prevCount + 6); // Increase visible count by 6
  };

  // Show less doctors on button click
  const handleShowLess = () => {
    setVisibleDoctors(6); // Reset to initial visible count
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page doctors">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-10">
        Check Available Doctors 👩‍⚕️👨‍⚕️👨‍⚕️
      </h1>
      <div className="px-4 py-5 font-[sans-serif]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors && doctors.length > 0 ? (
              doctors.slice(0, visibleDoctors).map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={
                      item.docAvatar
                        ? item.docAvatar.url
                        : "https://via.placeholder.com/300"
                    }
                    alt={`${item.firstName} ${item.lastName}`}
                    className="w-full h-60 object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">
                      {`${item.firstName} ${item.lastName}`}
                    </h3>
                    <p className="text-gray-900 text-sm mb-2 flex items-center">
                      <FaEnvelope className="mr-2 text-blue-500 text-xl" />
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p className="text-gray-900 text-sm mb-2 flex items-center">
                      <FaPhoneAlt className="mr-2 text-blue-500 text-xl" />
                      <strong>Phone:</strong> {item.phone}
                    </p>
                    <p className="text-gray-900 text-sm mb-2 flex items-center">
                      <FaBirthdayCake className="mr-2 text-blue-500 text-xl" />
                      <strong>DOB:</strong> {item.dob.substring(0, 10)}
                    </p>
                    <p className="text-gray-900 text-sm mb-2 flex items-center">
                      <FaBuilding className="mr-2 text-blue-500 text-xl" />
                      <strong>Department:</strong> {item.doctorDepartment}
                    </p>
                    <p className="text-gray-900 text-sm mb-2 flex items-center">
                      <FaIdCard className="mr-2 text-blue-500 text-xl" />
                      <strong>NIC:</strong> {item.nic}
                    </p>
                    <p className="text-gray-900 text-sm mb-2 flex items-center">
                      <BiMaleFemale className="mr-2 text-blue-500 text-xl" />
                      <strong>Gender:</strong> {item.gender}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center text-xl text-gray-600">
                No Registered Doctors Found!
              </h1>
            )}
          </div>
          <div className="text-center mt-6">
            {visibleDoctors < doctors.length && (
              <button
                onClick={handleLoadMore}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                Load More
              </button>
            )}
            {visibleDoctors > 6 && (
              <button
                onClick={handleShowLess}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AviliableDoctors;
