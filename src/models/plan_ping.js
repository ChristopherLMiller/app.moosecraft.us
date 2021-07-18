/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_ping', {
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
    date: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    max_ping: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    min_ping: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    avg_ping: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'plan_ping'
  });
};
