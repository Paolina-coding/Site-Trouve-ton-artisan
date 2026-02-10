import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CarteArtisan from "../ui/carteArtisan";
import { searchArtisans } from "../../api";

const Recherche = () => {
    const { nom } = useParams();
    const [artisans, setArtisans] = useState(null);

    useEffect(() => {
      searchArtisans(nom).then(data => setArtisans(data)); 
    }, [nom]);

    if (artisans === null) {
      return (
        <main className="container">
          <p>Chargement...</p>
        </main> );
    }

    if (!Array.isArray(artisans)) {
          return (
          <main className="container">
              <p>Aucun artisan ne correspond à votre recherche.</p>
          </main>
          );
    }

    return (
      <main className="container">
          <h2>Résultats pour : {nom}</h2>
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

export default Recherche;