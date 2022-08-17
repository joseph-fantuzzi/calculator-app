import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

const styles = {
  calc_container: "h-full absolute top-0 w-full flex items-center justify-center",
};

function App() {
  return (
    <div className="">
      <Navbar />
      <div className={styles.calc_container}>
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
