import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" className="header-logo"/></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/artisan/categorie/1">Bâtiment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/artisan/categorie/2">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/artisan/categorie/3">Fabrication</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/artisan/categorie/4">Alimentation</Link>
                    </li>
                </ul>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Nom d'artisan" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Recherche</button>
                </form>
            </div>
        </div>
    </nav>       
  );
};

export default Header;