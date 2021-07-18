/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_user_info', {
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
    server_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    registered: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    opped: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    banned: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'plan_user_info'
  });
};
