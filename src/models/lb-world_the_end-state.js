/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lb-world_the_end-state', {
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
    tableName: 'lb-world_the_end-state'
  });
};
