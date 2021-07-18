/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('griefprevention_nextclaimid', {
    nextid: {
      type: DataTypes.INTEGER(15),
      allowNull: true
    }
  }, {
    tableName: 'griefprevention_nextclaimid'
  });
};
