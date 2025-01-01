"use client";
import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Service from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import AditionalInfo from "./AditionalInfo";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky header */}
      <Header />

      <Hero />

      {/* Services section with scroll-triggered animation yet to be included properly BUG BUG BUG BUG */}
      <Service />

      <Contact />

      <AditionalInfo />

      <Footer />
    </div>
  );
}
