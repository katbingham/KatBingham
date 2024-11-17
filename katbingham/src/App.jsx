import { useState } from 'react'
import React from "react";
import Navbar from "./components/common/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/common/footer/Footer";
import './css/styles.css'

export default function App() {
  let Component
  switch(window.location.pathname) {
      case "":
          Component = About
          break
      case "/":
          Component = About
          break
      case "/Home":
          Component = About
          break
      case "/About":
          Component = About
          break
      case "/Resume":
          Component = Resume
          break
      case "/Contact":
          Component = Contact
          break
  }
  return (
      <>
      <Navbar/>
      <Component/>
      <Footer/>
      </>
  );
}