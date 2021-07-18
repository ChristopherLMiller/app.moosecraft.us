/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_settings', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    server_uuid: {
      type: DataTypes.STRING(39),
      allowNull: false,
      unique: true
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'plan_settings'
  });
};
