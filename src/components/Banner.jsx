import bannerImg from '../assets/IMG.svg'
import '../styles/Banner.scss'


export default function Banner() {
   return (
    <div className="main__banner">
          <img src={bannerImg} alt="image d'une côte océanique" />
          <div className="main__banner--overlay" />
        <h1 className="main__banner--text">Chez vous, partout et ailleurs</h1>
        </div>



   ) } 