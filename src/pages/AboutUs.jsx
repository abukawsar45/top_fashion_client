import React, { useEffect } from 'react';
import About from '../components/AboutUs/About';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>
    <About/>
  </div>;
};

export default AboutUs;
