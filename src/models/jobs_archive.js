/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs_archive', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    job: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    experience: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    left: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    jobid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'jobs_archive'
  });
};
