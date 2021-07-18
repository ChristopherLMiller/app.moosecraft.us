/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gemseconomy_balances', {
    account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currency_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'gemseconomy_balances'
  });
};
