import Header from "../ui/header";
import Footer from "../ui/footer";

const Erreur_404 = () => {
  return (
    <main className="container">
        <Header/>
        <div>
            <h2>La page que vous avez demandé n'existe pas.</h2>        
        </div>
        <Footer/>     
    </main>
  );
};

export default Erreur_404;