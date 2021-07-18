/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lb-world-entities', {
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
    entityid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    entitytypeid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    x: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    y: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    z: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    action: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    data: {
      type: "MEDIUMBLOB",
      allowNull: true
    }
  }, {
    tableName: 'lb-world-entities'
  });
};
