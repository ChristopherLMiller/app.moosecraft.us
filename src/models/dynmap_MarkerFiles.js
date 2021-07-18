/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dynmap_MarkerFiles', {
    FileName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'dynmap_MarkerFiles'
  });
};
