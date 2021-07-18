/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs_blocks', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    world: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    x: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    y: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    z: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    recorded: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    resets: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    worldid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'jobs_blocks'
  });
};
