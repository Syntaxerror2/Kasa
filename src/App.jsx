import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import NotFound from './components/notFound'
import './styles/App.scss'

function App() {
  return (
    <div>
      <Header />
      


      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    
    </div>
  );
}

export default App;
