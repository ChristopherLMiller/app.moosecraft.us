/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_tps', {
    server_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_servers',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tps: {
      type: "DOUBLE",
      allowNull: false
    },
    players_online: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cpu_usage: {
      type: "DOUBLE",
      allowNull: false
    },
    ram_usage: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    entities: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    chunks_loaded: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    free_disk_space: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'plan_tps'
  });
};
