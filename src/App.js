import React from "react";

import Head from "./components/head/Index";
import Body from "./components/body/Index";
import Nav from "./components/navbar/Index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Head />
      <Body />
    </div>
  );
}

export default App;
