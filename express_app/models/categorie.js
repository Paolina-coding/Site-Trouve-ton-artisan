const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Categorie', {
    id_categorie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom_categorie: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'categorie',
    timestamps: false
  });
};
