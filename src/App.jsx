import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import QuitHero from "./components/QuitHero";
import Footer from "./components/Footer";
import AnimatedCursor from "./components/AnimatedCursor";

export default function App() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
      <Navbar />
      <QuitHero />
      <Footer />
      <AnimatedCursor />
    </div>
  );
}
