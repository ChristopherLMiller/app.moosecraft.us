/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_kills', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    killer_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    victim_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    server_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    weapon: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    session_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_sessions',
        key: 'id'
      }
    }
  }, {
    tableName: 'plan_kills'
  });
};
