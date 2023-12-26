import React, { useState, useEffect, Component } from "react";
import {Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import SmoothScroll from "smooth-scroll";
import JsonData from "./data/data.json";
import { Navigation } from "./components/HomePage/navigation";
import { Header } from "./components/HomePage/header";
import { Features } from "./components/HomePage/features";
import { About } from "./components/HomePage/about";
import { Services } from "./components/HomePage/services";
import { Gallery } from "./components/HomePage/gallery";
import { Testimonials } from "./components/HomePage/testimonials";
import { Team } from "./components/HomePage/Team";
import { Contact } from "./components/HomePage/contact";
import './App.css';
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
}

export default App;
