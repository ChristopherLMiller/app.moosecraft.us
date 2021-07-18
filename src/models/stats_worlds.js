/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_worlds', {
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
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    raining: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'stats_worlds'
  });
};
