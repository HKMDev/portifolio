import React from "react";
import Header from "./components/Header";
import QuemSomos from "./components/About";
import GlobalStyle from "./globalStyles";
// import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <QuemSomos />
      {/* <Jobs /> */}
      <Footer />
    </>
  );
};

export default App;
