/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_extension_tabs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    element_order: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'VALUES,GRAPH,TABLE'
    },
    tab_priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    plugin_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_extension_plugins',
        key: 'id'
      }
    },
    icon_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_extension_icons',
        key: 'id'
      }
    }
  }, {
    tableName: 'plan_extension_tabs'
  });
};
