import logo from '../assets/LOGO__footer.svg'
import '../styles/Footer.scss'

export default function Footer() {
 return (
<footer className="footer">
<img src={logo} alt="Kasa logo" className="footer__logo" />
<h3 className="footer__credits">© 2020 Kasa. All rights reserved</h3>

 </footer>
)


}