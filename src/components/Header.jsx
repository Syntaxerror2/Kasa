import { Link } from 'react-router-dom';
import '../styles/Header.scss'
import logo from '../assets/LOGO.svg'

export default function Header() {
    return (
        <header className="header">
        <div className="header__logo">
        <img alt="logo de Kasa, site de vente immobilière" src={logo}></img>
        </div>
        <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        </nav>
        
        </header>
        
        
        )
}