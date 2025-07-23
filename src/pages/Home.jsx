import React from 'react'
import Hero from '../components/Hero'
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'
import HowitWork from '../components/HowitWork'
// import AviliableDoctors from '../components/AviliableDoctors'
const Home = () => {
  return (
    <div className='-mt-4'>
      <Hero
        title={
          "Welcome to AK Medical Insitute | Your Trusted HealthCare Provider"
        }
        imageURL={"/hero.png"}
      />
      <Department />
      {/* <AviliableDoctors/> */}
      <HowitWork />
      <MessageForm />
    </div>
  );
}

export default Home;