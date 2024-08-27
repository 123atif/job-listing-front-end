import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListing />
    </>
  );
}

export default App;
