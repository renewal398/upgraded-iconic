import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Branches from "./pages/Branches"; 
import Goals from "./pages/Goals";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Overview />} />
          <Route path="/branches" element={<Branches />} /> 
          <Route path="/goals" element={<Goals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;