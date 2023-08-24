import vk from './../../img//vk.svg';
import instagram from './../../img//instagram.svg';
import twitter from './../../img//twitter.svg';
import linkedIn from './../../img//linkedIn.svg';
import gitHub from './../../img//gitHub.svg';
import "./style.css";

const Footer = () => {
    return (
		<footer className="footer">
        <div className="containers">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/ramil_limarov" target="_blank" rel="noreferrer" ><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.instagram.com/ramil_tiranov/" target="_blank" rel="noreferrer" ><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>

	);
}

export default Footer;