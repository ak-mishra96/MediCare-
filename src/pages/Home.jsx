import React from 'react'
import Hero from '../components/Hero'
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'
import HowitWork from '../components/HowitWork'
const Home = () => {
  return (
    <div>
      {/* <Register/> */}
      <Hero
        title={
          "Welcome to Arun Medical Insitute | Your Trusted HealthCare Provider"
        }
        imageURL={"/hero.png"}
      />
      <Department />
      <HowitWork />
      {/* <Biography image={"/about.png"} /> */}

      <MessageForm />
    </div>
  );
}

export default Home;