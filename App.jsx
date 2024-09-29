import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Program from "./Component/Programs/Program";
import Title from "./Component/Title/Title";
import About from "./Component/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" Title="What We Offer" />
        <Program />
        <About/>
      </div>
    </div>
  );
};

export default App;
