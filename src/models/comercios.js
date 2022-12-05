'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comercios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comercios.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id'
      });
      Comercios.hasOne(models.Dados_Pagamentos, {
        foreignKey: 'comercio_id'
      });
    }
  }
  Comercios.init({
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comercios',
  });
  return Comercios;
};