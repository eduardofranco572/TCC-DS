'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [{
      nome: 'Alex',
      email: 'alex@gmail.com',
      telefone: '(19)995989999',
      senha: 'senha123',
      cpf_cnpj: 'xxxxxxxxx',
      ativo: true,
      administrador: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};