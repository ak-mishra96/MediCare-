import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index.js";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { url } from "../Api.jsx";

const AppointmentDetails = () => {
  const [appointments, setAppointments] = useState([]);
  const { isAuthenticated} = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(`${url}/appointment/getall`, {
          withCredentials: true,
        });
        setAppointments(data.appointment);
        console.log(data);
      } catch (error) {
        setAppointments([]);
        console.error("Error fetching appointments:", error);
        toast.error("Error fetching appointments:", error.message);
      }
    };
    fetchAppointments();
    // fetchDoctors();
  }, []);

 

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <h2 class="text-slate-600 sm:text-4xl text-2xl font-bold text-center mb-10 mt-32">
          Appointments Details 👉👉
        </h2>
        <div className="banner overflow-x-auto mt-4">
          <table className="min-w-full bg-white border-gray-800 shadow-md rounded-md">
            <tbody>
              <div className="font-sans overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-400">
                  <thead className="bg-slate-600 text-white whitespace-nowrap">
                    <tr>
                      <th className="px-4 py-4 text-left text-sm font-semibold  uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold  uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold  uppercase tracking-wider">
                        Doctor
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold  uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold  uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold  uppercase tracking-wider">
                        Visited
                      </th>
                    </tr>
                  </thead>
                  {appointments.length > 0 ? (
                    appointments.map((item, index) => {
                      return (
                        <tbody
                          key={index}
                          className="bg-white divide-y divide-gray-200 whitespace-nowrap ">
                          <tr>
                            <td className="px-4 py-4 text-sm text-gray-800">
                              {`${item.firstName} ${item.lastName}`}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                              {item.appointment_date.substring(0, 16)}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                              {`${item.doctor.firstName} ${item.doctor.lastName}`}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                              {item.department}
                            </td>
                            <td
                              className={
                                item.status === "Pending"
                                  ? "text-yellow-800 bg-yellow-200 px-4 py-2 whitespace-nowrap"
                                  : item.status === "Accepted"
                                  ? "text-green-800 bg-green-200 px-4 py-2 whitespace-nowrap "
                                  : "text-red-800 bg-red-200 px-4 py-2 whitespace-nowrap"
                              }>
                              {item.status}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {item.hasVisited ? (
                                <GoCheckCircleFill className="text-green-500" />
                              ) : (
                                <AiFillCloseCircle className="text-red-500" />
                              )}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-4 py-2 text-center text-gray-500">
                        No Appointments Found!
                      </td>
                    </tr>
                  )}
                </table>
              </div>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default AppointmentDetails;
