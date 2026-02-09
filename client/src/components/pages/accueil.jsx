import Header from "../ui/header";
import Footer from "../ui/footer";

const Accueil = () => {
  return (
    <main className="container">
        <Header/>
        <div>
            <div>
            <h2>Comment trouver mon artisan?</h2>
                <h3>1. Choisir la catégorie d'artisanat dans le menu</h3>
                <p></p>
                <h3>2. Choisir un artisan</h3>
                <p></p>
                <h3>3. Le contacter via le formulaire de contact</h3>
                <p></p>
                <h3>4. Une réponse sera apportée sous 48h</h3>
                <p></p>
            </div>
            <div>
            <h2>Artisans du mois</h2>
            
            </div>
        </div>
        <Footer/>     
    </main>
  );
};

export default Accueil;