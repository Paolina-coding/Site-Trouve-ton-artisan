import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArtisanById } from "../../api";

const Artisan = () => {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);

    useEffect(() => {
        getArtisanById(id).then(data => setArtisan(data)); 
    }, [id]);

    if (!artisan) {
        return (
        <main className="container">
            <p>Chargement...</p>
        </main>
        );
    }

    return (
        <main className="container">
        <div>
            <h2>{artisan.nom}</h2>
            <p>
            Note : {artisan.note} <br />
            Spécialité : {artisan.Specialite.nom_specialite} <br />
            Localisation : {artisan.ville} <br />
            À propos : {artisan.a_propos} <br />
            </p>

            <form>
            <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom Prénom</label>
                <input type="text" className="form-control" id="nom" placeholder="Nom Prénom"/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>

            <div className="mb-3">
                <label htmlFor="objet" className="form-label">Objet</label>
                <input type="text" className="form-control" id="objet" placeholder="Objet"/>
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" placeholder="Veuillez écrire votre message ici" rows="5"/>
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </div>

        </main>
    );
    };

export default Artisan;