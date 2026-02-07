const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Specialite', {
    id_specialite: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom_specialite: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_categorie: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'specialite',
    timestamps: false
  });
};
