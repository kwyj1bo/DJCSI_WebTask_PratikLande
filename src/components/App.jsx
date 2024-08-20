import React from "react";
import Homepage from "./Home"
import Cards from "./cards_hotels"
import Facilities from "./facilities"
import Footer from "./footer"
import Map from "./map"
function App() {
  return (
    <div>
    <Homepage />
    <Cards />
    <Facilities/>
    <Map/>
    <Footer />
    </div>
  );
}

export default App;
