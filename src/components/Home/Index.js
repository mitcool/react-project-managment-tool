import React from 'react';

import Hero from './Hero'
import Welcome from './Welcome'
import Services from './Services';
import Problem  from './Problem';
import Why from './Why';
import Client from './Client';
import Contact from './Contact';
import Footer from './Footer'


const Index = () => {
  return (
    <div>
      <Hero/>
      <Welcome/>
      <Services/>
      <Problem/>
      <Why/>
      <Client/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Index
