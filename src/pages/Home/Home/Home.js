import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Navigation/>
          <Banner/>
          <Services/>
          <Features/>
          <AppointmentBanner/>
         <Testimonial/>
         <Blogs/>
        <OurDoctor/>
        <Contact/>
        </div>
    );
};

export default Home;