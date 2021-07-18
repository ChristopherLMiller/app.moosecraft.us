/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_extension_groups', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    group_name: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'plan_extension_groups'
  });
};
