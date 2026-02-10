import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [search, setSearch] = useState(""); 
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (search.trim() === "") return;
        navigate(`/artisan/search/${search}`); setSearch("");
        };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" className="header-logo img-fluid" style={{ width: "120px" }}/></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/artisan/categorie/2">Bâtiment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/artisan/categorie/4">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/artisan/categorie/3">Fabrication</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/artisan/categorie/1">Alimentation</Link>
                        </li>
                    </ul>
                    <div className="searchbar">
                    <form className="d-flex recherche" role="search" onSubmit={handleSubmit}>
                        <input className="me-2" type="search" placeholder="Recherche" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button className="btn" type="submit"><i className="bi bi-search" style={{ color: "#0074C7" }}></i></button>
                    </form>
                    </div>
                </div>
            </div>
        </nav>       
    );
};

export default Header;