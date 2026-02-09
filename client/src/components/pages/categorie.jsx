import Header from "../ui/header";
import Footer from "../ui/footer";
import CarteArtisan from "../ui/carteArtisan";

const Categorie = () => {
  return (
    <main className="container">
        <Header/>
        <div>
            <h2>nom catégorie</h2>
            <CarteArtisan/>    
        </div>
        <Footer/>     
    </main>
  );
};

export default Categorie;