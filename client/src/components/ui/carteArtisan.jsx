import { Link } from "react-router-dom";

const CarteArtisan = ({ artisan }) => {
  return (
    <Link to={`/artisan/${artisan.id_artisan}`} >
        <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5 className="card-title">{artisan.nom}</h5>
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