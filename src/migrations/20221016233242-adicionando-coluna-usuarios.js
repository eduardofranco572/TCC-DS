module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Usuarios', 'administrador',
      Sequelize.BOOLEAN
    );
  },
  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Usuarios', 'administrador',
      Sequelize.BOOLEAN
    );
  },
};