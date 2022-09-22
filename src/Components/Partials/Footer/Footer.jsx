import { Link } from 'react-router-dom';
import Facebook from "../../../Assets/Images/Icon_Facebook.svg";
import Instagram from "../../../Assets/Images/Icon_Instagram.svg";
import LinkedIn from "../../../Assets/Images/Icon_LinkIn.svg";

export const Footer = () => {
    return(
        <footer className="Footer">
            <div>
                <h3>ADRESSE</h3>
                <p>Det utrolige teater</p>
                <p>Havnegade 901</p>
                <p>9000 Aalborg</p>
                <p>EAN 5798003279845</p>
                <p>CVR 1001 0012</p>
                <p><span>Find vej på kort</span></p>
            </div>
            <div className='col-1'>
                <div>
                    <h3>BILLETSERVICE</h3>
                    <p>Se åbningstider</p>
                    <p>Billettelefon: +45 96 31 80 80</p>
                    <p>billet@dut.dk</p>
                </div>
                <div>
                    <h3>ADMINISTRATION</h3>
                    <p>Telefon: +45 96 31 80 90</p>
                    <p>adm@dut.dk</p>
                </div>
            </div>
            <div>
                <h3>PRAKTISK INFO</h3>
                <p>Kontakt</p>
                <p>Kom trygt i teatret</p>
                <p>Presseside</p>
                <p>Skoleforestillinger</p>
                <p>Teatercaféen</p>
                <p>Handelsbetingelser</p>
            </div>
            <div className='footerIcons'>
                <Link to={'/'}><img src={Facebook} alt="" /></Link>
                <Link to={'/'}><img src={Instagram} alt="" /></Link>
                <Link to={'/'}><img src={LinkedIn} alt="" /></Link>
            </div>
        </footer>
    )
}