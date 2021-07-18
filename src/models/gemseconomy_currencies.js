/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gemseconomy_currencies', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_singular: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_plural: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    default_balance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    symbol: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    decimals_supported: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_default: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    payable: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'gemseconomy_currencies'
  });
};
