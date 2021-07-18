/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('luckperms_players', {
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    primary_group: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'luckperms_players'
  });
};
