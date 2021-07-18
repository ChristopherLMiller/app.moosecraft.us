/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_extension_tables', {
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
    color: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'NONE'
    },
    condition_name: {
      type: DataTypes.STRING(54),
      allowNull: true
    },
    col_1_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    col_2_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    col_3_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    col_4_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    col_5_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    plugin_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_extension_plugins',
        key: 'id'
      }
    },
    icon_1_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'plan_extension_icons',
        key: 'id'
      }
    },
    icon_2_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'plan_extension_icons',
        key: 'id'
      }
    },
    icon_3_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'plan_extension_icons',
        key: 'id'
      }
    },
    icon_4_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'plan_extension_icons',
        key: 'id'
      }
    },
    icon_5_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
    tableName: 'plan_extension_tables'
  });
};
