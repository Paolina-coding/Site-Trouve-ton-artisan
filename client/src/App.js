import { Routes, Route } from "react-router-dom";
import Header from "./components/ui/header.jsx";
import Footer from "./components/ui/footer.jsx";
import Accueil from "./components/pages/accueil.jsx";
import Erreur_404 from "./components/pages/404";
import Recherche from "./components/pages/recherche";
import Categorie from "./components/pages/categorie.jsx";
import Artisan from "./components/pages/artisan";
import Legal from "./components/pages/legal";

import './App.scss';


function App() {
  return (
    <div className="App">
      <Header/>
      <main className="flex-grow-1">
        <Routes>
        <Route path="/" element={<Accueil />} />
          <Route path="/artisan/search/:nom" element={<Recherche />} />
          <Route path="/artisan/categorie/:id" element={<Categorie />} />
          <Route path="/artisan/:id" element={<Artisan />} />        
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<Erreur_404 />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

