/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_world_times', {
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
    world_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_worlds',
        key: 'id'
      }
    },
    server_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    session_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_sessions',
        key: 'id'
      }
    },
    survival_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    creative_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    adventure_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    spectator_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'plan_world_times'
  });
};
