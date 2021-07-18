/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lb-world_the_end-chestdata', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    item: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    itemremove: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    itemtype: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'lb-world_the_end-chestdata'
  });
};
