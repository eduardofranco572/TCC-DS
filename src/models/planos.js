'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Planos.hasOne(models.Dados_Pagamentos, {
        foreignKey: 'plano_id'
      });
    }
  }
  Planos.init({
    nome_plano: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Planos',
  });
  return Planos;
};