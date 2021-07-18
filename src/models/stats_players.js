/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_players', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: "BINARY(16)",
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: 'Unknown'
    }
  }, {
    tableName: 'stats_players'
  });
};
