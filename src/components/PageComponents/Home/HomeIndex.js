import React, { Component } from 'react';

import HeroHeaderSection from './HeroHeaderSection'
import HeroBoxesSection from './HeroBoxesSection'
import CustomerLovesSection from './CustomerLovesSection'
import ServicesSection from './ServicesSection'
import SystemsSection from './SystemsSection'
import TestimonialSection from './TestimonialSection'

import '../../../css/main.css'



class HomeIndex extends Component {
  render() {
    return (
      <>
        <HeroHeaderSection />
        <HeroBoxesSection />
        <CustomerLovesSection />
        <ServicesSection />
        <SystemsSection />
        <TestimonialSection />
      


      </>
    );
  }
}

export default HomeIndex;
