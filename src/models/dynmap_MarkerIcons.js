/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dynmap_MarkerIcons', {
    IconName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    Image: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'dynmap_MarkerIcons'
  });
};
