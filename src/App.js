import React from "react";
import { Navbar } from "./components/Navbar";
import Hero  from "./components/Hero";
import About from "./components/About"
import Foorter from "./components/Foorter";


function App() {
  return (
  <div>
          <Navbar/>
          <Hero/>
          <About/>
          <Foorter/>
    </div>
  );
}

export default App;
