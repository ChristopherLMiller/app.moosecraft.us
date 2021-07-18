/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_kill', {
    player: {
      type: "BINARY(16)",
      allowNull: false
    },
    world: {
      type: "BINARY(16)",
      allowNull: false
    },
    victimType: {
      type: DataTypes.STRING(127),
      allowNull: false
    },
    victimName: {
      type: DataTypes.STRING(127),
      allowNull: false
    },
    weapon: {
      type: DataTypes.STRING(127),
      allowNull: false
    },
    amount: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '1'
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'stats_kill'
  });
};
