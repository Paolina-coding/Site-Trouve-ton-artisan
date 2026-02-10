const { Artisan, Specialite, Categorie } = require('../models');
const { Op } = require("sequelize");

/*Récupère le(s) artisan(s) avec le nom. Le include permet de faire un JOIN pour récupérer les noms des spécialités et catégories*/
exports.getArtisansByName = async (name) => {
  return Artisan.findAll({
    where: { nom: { [Op.like]: `%${name}%` } },
    include: [{model: Specialite, include: [Categorie]}]
  });
};

exports.getArtisanById = async (id) => {
  return Artisan.findOne({
    where: { id_artisan: id },
    include: [{model: Specialite, include: [Categorie]}]
  });
};

/*Récupère les artisans par l'id de la catégorie et renvoit les détails des artisans avec leur catégorie et spécialité. Le required true permet de faire un inner join*/
exports.getArtisansByCategorie = async (idCategorie) => {
  return Artisan.findAll({
    include: [{
      model: Specialite,
      required: true, 
      include: [{
        model: Categorie,
        required: true, 
        where: { id_categorie: idCategorie }
      }]
    }]
  });
};


/*Récupère les artisans du top et renvoit leurs détails, catégorie et spécialité*/
exports.getTopArtisans = async () => {
  return Artisan.findAll({
    where: { top_artisan: true },
    include: [{model: Specialite, include: [Categorie]}]
  });
};