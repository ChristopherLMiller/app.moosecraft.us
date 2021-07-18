/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lb-entitytypes', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'lb-entitytypes'
  });
};
