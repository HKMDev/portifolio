import React from "react";
import Header from "./components/Header";
import Team from "./components/Team";
import GlobalStyle from "./globalStyles";


import Jobs from "./components/Jobs";

import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Team />
      <Jobs />
      <Footer />
    </>
  );
};

export default App;
