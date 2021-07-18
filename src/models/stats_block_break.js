/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_block_break', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    player: {
      type: "BINARY(16)",
      allowNull: false
    },
    world: {
      type: "BINARY(16)",
      allowNull: false
    },
    material: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    tool: {
      type: DataTypes.STRING(90),
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
    tableName: 'stats_block_break'
  });
};
