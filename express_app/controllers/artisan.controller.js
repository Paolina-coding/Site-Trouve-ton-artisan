const service = require ("../services/artisan.service");

exports.getTopArtisans = async (req, res) => {
    try { 
        const artisans = await service.getTopArtisans(); 
        if (artisans.length === 0) {
            return res.status(404).json({ message: "Aucun artisan trouvé dans le top" });
        }
        return res.json(artisans); 
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Erreur serveur' }); 
    } 
};

exports.getArtisansByCategorie = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const artisans = await service.getArtisansByCategorie(id);

    if (artisans.length === 0) {
      return res.status(404).json({ message: "Aucun artisan trouvé pour cette catégorie" });
    }
    return res.json(artisans);
  } 
  catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.getArtisansByName = async (req, res) => {
  try {
    const name = req.params.nom;
    const artisans = await service.getArtisansByName(name);

    if (artisans.length === 0) {
      return res.status(404).json({ message: "Aucun artisan trouvé avec ce nom" });
    }
    return res.json(artisans);
  } 
  catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};