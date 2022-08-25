import React from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Team from "./components/Team";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Team />
      <Jobs />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
