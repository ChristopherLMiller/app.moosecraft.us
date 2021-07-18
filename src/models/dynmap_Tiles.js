/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dynmap_Tiles', {
    MapID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    x: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    y: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    zoom: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    HashCode: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    LastUpdate: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Format: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Image: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'dynmap_Tiles'
  });
};
