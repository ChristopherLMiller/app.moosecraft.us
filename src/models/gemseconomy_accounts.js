/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gemseconomy_accounts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payable: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'gemseconomy_accounts'
  });
};
