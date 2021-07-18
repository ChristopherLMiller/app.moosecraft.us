/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('luckperms_groups', {
    name: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'luckperms_groups'
  });
};
