/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dynmap_SchemaVersion', {
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'dynmap_SchemaVersion'
  });
};
