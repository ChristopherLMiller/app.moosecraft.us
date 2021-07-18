/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_extension_server_table_values', {
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
    col_1_value: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    col_2_value: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    col_3_value: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    col_4_value: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    col_5_value: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    table_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_extension_tables',
        key: 'id'
      }
    }
  }, {
    tableName: 'plan_extension_server_table_values'
  });
};
