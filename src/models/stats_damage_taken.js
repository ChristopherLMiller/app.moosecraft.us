/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_damage_taken', {
    player: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    world: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: "DOUBLE",
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    type: {
      type: DataTypes.STRING(127),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'stats_damage_taken'
  });
};
