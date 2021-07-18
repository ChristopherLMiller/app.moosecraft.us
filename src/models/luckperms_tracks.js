/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('luckperms_tracks', {
    name: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    groups: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'luckperms_tracks'
  });
};
