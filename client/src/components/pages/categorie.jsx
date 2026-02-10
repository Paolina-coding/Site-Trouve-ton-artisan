import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CarteArtisan from "../ui/carteArtisan";
import { getArtisansByCategorie } from "../../api";

const Categorie = () => {
  const { id } = useParams();
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    getArtisansByCategorie(id).then(data => setArtisans(data));
  }, [id]);

  return (
    <main className="container">

      <h2>Artisans de la catégorie {artisans[0]?.Specialite?.Categorie.nom_categorie}</h2>

      <div className="row">
        {artisans.map(artisan => (
          <div className="col-md-4 mb-3 conteneur-cartes" key={artisan.id_artisan}>
            <CarteArtisan artisan={artisan} />
          </div>
        ))}
      </div>

    </main>
  );
};

export default Categorie;