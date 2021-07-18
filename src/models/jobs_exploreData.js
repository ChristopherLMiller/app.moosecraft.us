/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs_exploreData', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    worldname: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    chunkX: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    chunkZ: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    playerNames: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    worldid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'jobs_exploreData'
  });
};
