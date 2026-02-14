import "./App.css";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollTop";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Learn from "./components/Learn";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
