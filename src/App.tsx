import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GiftCards from './components/GiftCards';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f8f6]">
      <Header />
      <Hero />
      <GiftCards />
      <Testimonials />
      <Footer />
    </div>
  );
}