import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from "../src/pages/About";
import "./styles/App.scss";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="app-container">
      <main className="page__container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appartements/:id" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
