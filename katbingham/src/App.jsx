import React from "react";
import Navbar from "./components/common/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/common/footer/Footer";

export default function App() {
    let Component
    switch(window.location.pathname) {
        case "/":
            Component = Home
            break
        case "/Home":
            Component = Home
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