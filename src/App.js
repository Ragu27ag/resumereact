import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
// import "aos/dist/aos.css";
import Aos from "aos";
import Caroussel from "./Pages/Caroussel";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Pages/Layout";

Aos.init();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="carousel" element={<Caroussel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
