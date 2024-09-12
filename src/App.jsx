import { useState } from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Promotion from "./components/Promotion/Promotion";
import Ship from "./components/Ship/Ship";
import Duration from "./components/Duration/Duration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Promotion />
      <Items />
      <Ship />
      <Duration />
      {/* <About /> */}
      {/* <Portfolio /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
