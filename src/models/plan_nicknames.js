/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_nicknames', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    server_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    last_used: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'plan_nicknames'
  });
};
