import React from "react";
import { About } from "./components/AboutSection/About";
import { Principals } from "./components/PrincipalSection/Principals";
import { Faculty } from "./components/FacultySection/Faculty";
import { BlogsData } from "./components/FacultySection/BlogsData";
import { Gallary } from "./components/GallarySection/Gallary";
import { Contact } from "./components/ContactSection/Contact";
import Header from "./components/HeaderSection/Header";
import Footer from "./components/FooterSection/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Principals />
      <Faculty />
      <BlogsData />
      <Gallary />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
