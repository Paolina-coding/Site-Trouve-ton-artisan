import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../ui/header";
import Footer from "../ui/footer";
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
          <Header />
          <p>Chargement...</p>
          <Footer />
        </main> );
    }

    if (!Array.isArray(artisans)) {
          return (
          <main className="container">
              <Header />
              <p>Aucun artisan ne correspond à votre recherche.</p>
              <Footer />
          </main>
          );
    }

    return (
      <main className="container">
          <Header/>
          <h2>Résultats pour : {nom}</h2>
          <div className="row">
            {artisans.map(artisan => (
              <div className="col-md-4 mb-3" key={artisan.id_artisan}>
                <CarteArtisan artisan={artisan} />
              </div>
            ))}
          </div>
          <Footer/>     
      </main>
    );
    };

export default Recherche;