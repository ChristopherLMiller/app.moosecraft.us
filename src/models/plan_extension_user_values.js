/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_extension_user_values', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    boolean_value: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    double_value: {
      type: "DOUBLE",
      allowNull: true
    },
    percentage_value: {
      type: "DOUBLE",
      allowNull: true
    },
    long_value: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    string_value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    group_value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    provider_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_extension_providers',
        key: 'id'
      }
    }
  }, {
    tableName: 'plan_extension_user_values'
  });
};
