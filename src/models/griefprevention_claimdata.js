/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('griefprevention_claimdata', {
    id: {
      type: DataTypes.INTEGER(15),
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lessercorner: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    greatercorner: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    builders: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    containers: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accessors: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    managers: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    inheritnothing: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    parentid: {
      type: DataTypes.INTEGER(15),
      allowNull: true
    }
  }, {
    tableName: 'griefprevention_claimdata'
  });
};
