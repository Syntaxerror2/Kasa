import { Link } from 'react-router-dom';
import '../styles/Header.scss'
import logo from '../assets/LOGO.png'

export default function Header() {
    return (
        <header className="banner">
        <div className="banner__logo">
        <img alt="logo de Kasa, site de vente immobilière" src={logo}></img>
        </div>
        <nav className="banner__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        </nav>
        
        </header>
        
        
        )
}