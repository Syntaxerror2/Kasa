import logo from '../assets/LOGO__footer.svg'
import '../styles/Footer.scss'

export default function Footer() {
 return (
<footer className="footer">
<div  className="footer__logo" >
    <img src={logo} alt="Kasa logo"></img>
</div>
<h3 className="footer__credits">© 2020 Kasa. All rights reserved</h3>

 </footer>
)


}