import { Link } from "react-router-dom";

const CarteArtisan = ({ artisan }) => {
  return (
    <Link to={`/artisan/${artisan.id_artisan}`} className="carte-artisan-link">
        <div className="card">
        <div className="card-body">
            <h3>{artisan.nom}</h3>
            <p className="card-text">Note : {artisan.note}</p>
            <p className="card-text">
            Spécialité : {artisan.Specialite?.nom_specialite}
            </p>
            <p className="card-text">Localisation : {artisan.ville}</p>
        </div>
        </div>
    </Link>
  );
};

export default CarteArtisan;