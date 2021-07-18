/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lb-players', {
    playerid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UUID: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    playername: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    firstlogin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lastlogin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    onlinetime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'lb-players'
  });
};
