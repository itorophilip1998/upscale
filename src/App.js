/* eslint-disable */
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission'; 
import WhatWeDo from './components/WhatWeDO';
import OurWorks from './components/OurWorks';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import About from './components/About'; 
import OurWorkProcess from './components/OurWorkProcess';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div className=''>
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Mission /> */}
      {/* <About /> */}
      <WhatWeDo />
      <OurWorks />
      <OurWorkProcess/>
      <ContactUs /> 
      <ScrollToTop smooth color="white" className="bg-transparent"/>

      <Footer />
    </div>
  );
}

export default App;
