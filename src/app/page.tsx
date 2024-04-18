"use client";
import React from "react";
import Banner from "./_components/Banner";
import Project from "./_components/Project";
import Skills from "./_components/Skills";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";

export default function LampDemo() {
  return (
    <>
      <div className="w-full">
        <Banner />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
