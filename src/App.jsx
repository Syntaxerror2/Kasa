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
    <div className="page__container">
      <Header />
  
      <Routes className="main">
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About />} />
       <Route path="*" element={<NotFound />} />
       <Route path="/appartements/:id" element={<Appartments/>} />
      </Routes>
      
    <Footer className="footer" />
    
    </div>
    
  );
}

export default App;
