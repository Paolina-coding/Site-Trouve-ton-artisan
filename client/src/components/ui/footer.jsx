import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid">
        <div >
            <ul>
                <li className="nav-item">
                    <Link className="nav-link" to="/legal">Mentions légales</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/legal">Données personnelles</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/legal">Accessibilité</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/legal">Cookies</Link>
                </li>
            </ul>
        </div>
        <address class="text-white text-center">
            Adresse : 101 cours Charlemagne<br />
            CS 20033<br />
            69269 LYON CEDEX 02<br />
            France<br />
            <br />
            Téléphone : +33 (0)4 26 73 40 00
        </address>
    </div>      
  );
};

export default Footer;