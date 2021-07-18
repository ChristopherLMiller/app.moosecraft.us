/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('luckperms_messenger', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    msg: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'luckperms_messenger'
  });
};
