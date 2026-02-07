const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Artisan', {
    id_artisan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    note: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false
    },
    ville: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    a_propos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    site_web: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    top_artisan: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    id_specialite: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'artisan',
    timestamps: false
  });
};
