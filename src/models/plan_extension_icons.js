/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_extension_icons', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'question'
    },
    family: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'SOLID'
    },
    color: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'NONE'
    }
  }, {
    tableName: 'plan_extension_icons'
  });
};
