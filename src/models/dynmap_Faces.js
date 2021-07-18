/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dynmap_Faces', {
    PlayerName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    TypeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Image: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'dynmap_Faces'
  });
};
