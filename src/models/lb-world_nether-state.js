/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lb-world_nether-state', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    replacedState: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    typeState: {
      type: "MEDIUMBLOB",
      allowNull: true
    }
  }, {
    tableName: 'lb-world_nether-state'
  });
};
