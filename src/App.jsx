import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Shop from "./components/Shop";
import HowToJoin from "./components/HowToJoin";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <Shop />
      <HowToJoin />
      <Footer />
    </div>
  );
}