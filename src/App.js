"use client";
import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Service from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import AditionalInfo from "./AditionalInfo";
import "leaflet/dist/leaflet.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col">
      <Header OnSetCurrentPage={setCurrentPage} />
      <div>
        {currentPage === "home" && <Hero />}
        {currentPage === "home" && <Service />}
      </div>
      <Contact />
      <AditionalInfo />
      <Footer />
    </div>
  );
}
