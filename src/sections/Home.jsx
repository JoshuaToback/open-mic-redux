import React from "react";

import "../assets/App.css"

import Navbar from "../Navbar";
import Services from "./Services";
import Clients from "./Clients";
import About from "./About";
import Contact from "./Contact";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
      <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="clients">
          <Clients />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
    </div>
  );
}

export default Home;
