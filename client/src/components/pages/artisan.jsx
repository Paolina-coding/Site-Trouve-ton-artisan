import Header from "../ui/header";
import Footer from "../ui/footer";

const Artisan = () => {
  return (
    <main className="container">
        <Header/>
        <div>
            <h2>Nom artisan ou entreprise</h2> 
            <p>
                Note : <br />
                Spécialité : <br />
                Localisation : <br />
                A propos <br />
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
                <input type="textarea" className="form-control" id="message" placeholder="Veuillez écrire votre message ici"/>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>      
        </div>
        <Footer/>     
    </main>
  );
};

export default Artisan;