import messageError from "../assets/404.svg"
import "../styles/Notfound.scss"
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
    <main className="notfound">
<div className="notfound__container">
    <img className="notfound__picture" src={messageError}/>
 </div>
 <p className="notfound__text">Oups ! La page que vous demandez n'existe pas.</p>
 <div className="notfound__backlink--wrapper">
 <Link to="/" className="notfound__backlink">Retourner sur la page d'accueil</Link>
</div>
    </main>
)
}