
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission'; 
import WhatWeDo from './components/WhatWeDO';
import OurWorks from './components/OurWorks';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import About from './components/About';
import OurWorkProcess from './components/OurWorksProcess';
 

function App() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Mission />
      <About />
      <WhatWeDo />
      <OurWorks />
      <OurWorkProcess/>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
