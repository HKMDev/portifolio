import React from "react";
import GlobalStyle from "./globalStyles";

import Header from "./components/Header";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Team spy={true} to='Team' smooth={true}/>
      <Jobs />
      <Contact />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
