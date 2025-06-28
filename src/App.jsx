import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import About from '../src/pages/About'
import './styles/App.scss'
import Appartments from './pages/Appartments';

function App() {
  return (
    <div>
      <Header />
  
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About />} />
       <Route path="*" element={<NotFound />} />
       <Route path="/appartements/:id" elements={<Appartments/>} />
      </Routes>

      <Footer />
    
    </div>
  );
}

export default App;
