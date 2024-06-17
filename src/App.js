import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Copy_Home from "./Components/Copy_Home";
import Header from "./Components/Header";
// import Testskills from "./Components/Testskills";
// import Copy_new from "./Components/Copy_new";
import New_about from "./Components/New_about";
import Contact from "./Components/Contact";
import test from "./Components/test";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/about" element={<New_about />} /> */}
          {/* <Route path="/skills" element={<Skills />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/skills1" element={<Testskills />} /> */}
          <Route path="/" element={<Copy_Home />} />
          <Route path="/test" element={<test />} />

          {/* <Route path="/copy1" element={<Copy_new />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
