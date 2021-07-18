/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lb-world_nether-entityids', {
    entityid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    entityuuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'lb-world_nether-entityids'
  });
};
