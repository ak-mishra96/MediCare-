import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointementForm.jsx";

const Appointement = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointement;
