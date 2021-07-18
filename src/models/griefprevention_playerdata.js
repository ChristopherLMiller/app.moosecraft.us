/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('griefprevention_playerdata', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lastlogin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    accruedblocks: {
      type: DataTypes.INTEGER(15),
      allowNull: true
    },
    bonusblocks: {
      type: DataTypes.INTEGER(15),
      allowNull: true
    }
  }, {
    tableName: 'griefprevention_playerdata'
  });
};
