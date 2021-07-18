/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_sessions', {
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
    session_start: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    session_end: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mob_kills: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    deaths: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    afk_time: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'plan_sessions'
  });
};
