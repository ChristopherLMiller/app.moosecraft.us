/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs_users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    player_uuid: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seen: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    donequests: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    quests: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'jobs_users'
  });
};
