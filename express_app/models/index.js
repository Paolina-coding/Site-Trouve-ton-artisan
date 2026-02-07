const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

const Artisan = require('./artisan')(sequelize);
const Categorie = require('./categorie')(sequelize);
const Specialite = require('./specialite')(sequelize);

// Relations
Specialite.belongsTo(Categorie, { foreignKey: 'id_categorie' });
Categorie.hasMany(Specialite, { foreignKey: 'id_categorie' });

Artisan.belongsTo(Specialite, { foreignKey: 'id_specialite' });
Specialite.hasMany(Artisan, { foreignKey: 'id_specialite' });

module.exports = { sequelize, Artisan, Categorie, Specialite };
