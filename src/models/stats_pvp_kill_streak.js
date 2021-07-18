/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_pvp_kill_streak', {
    player: {
      type: "BINARY(16)",
      allowNull: false
    },
    world: {
      type: "BINARY(16)",
      allowNull: false
    },
    amount: {
      type: "DOUBLE",
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'stats_pvp_kill_streak'
  });
};
