import React from "react";
import Routers from "./Routers";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="App-nav">
        <Navbar />
      </div>      
      <div className="App-content">
        <Routers />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
