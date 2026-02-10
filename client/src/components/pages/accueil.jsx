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
                <p>En haut à droite de votre écran, vous trouverez les différentes catégories d'artisans. Sélectionnez celle qui correspond à votre besoin pour 
                  afficher la liste des professionnels disponibles.</p>
                <h3>2. Choisir un artisan</h3>
                <p>Une fois la catégorie choisie, vous accédez à une page regroupant tous les artisans correspondants. Vous pouvez rapidement voir leur note, 
                  leur spécialité et leur localisation. Cliquez sur celui qui vous intéresse pour découvrir son profil complet.</p>
                <h3>3. Le contacter via le formulaire de contact</h3>
                <p>Quand vous avez trouvé l'artisan qui vous convient, cliquez sur son profil. En plus des détails, un formulaire de contact s'affiche pour vous 
                  permettre de lui envoyer directement votre message.</p>
                <h3>4. Une réponse sera apportée sous 48h</h3>
                <p>Après avoir cliqué sur “Envoyer”, votre message est transmis à l'artisan ou à son entreprise. Ils vous répondront dans un délai maximum de 48 heures.</p>
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