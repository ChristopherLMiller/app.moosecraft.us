/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lb-world_nether-blocks', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    playerid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    replaced: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    replacedData: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    typeData: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    x: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    y: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    z: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    }
  }, {
    tableName: 'lb-world_nether-blocks'
  });
};
