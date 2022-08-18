import React from "react";
import Header from "./components/Header";
import QuemSomos from "./components/About";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <QuemSomos />
    </>
  );
};

export default App;
