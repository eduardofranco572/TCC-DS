'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dados_Pagamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dados_Pagamentos.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id'
      });
      Dados_Pagamentos.belongsTo(models.Comercios, {
        foreignKey: 'comercio_id'
      });
      Dados_Pagamentos.belongsTo(models.Planos, {
        foreignKey: 'plano_id'
      });
    }
  }
  Dados_Pagamentos.init({
    forma_pagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dados_Pagamentos',
  });
  return Dados_Pagamentos;
};