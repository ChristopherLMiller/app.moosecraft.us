/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_extension_providers', {
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
    text: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    show_in_players_table: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    groupable: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    condition_name: {
      type: DataTypes.STRING(54),
      allowNull: true
    },
    provided_condition: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    format_type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    hidden: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    player_name: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
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
    },
    tab_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'plan_extension_tabs',
        key: 'id'
      }
    }
  }, {
    tableName: 'plan_extension_providers'
  });
};
