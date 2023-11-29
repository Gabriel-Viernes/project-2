const User = require('./User');
const FileRef = require('./FileRef');

User.hasMany(FileRef, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

FileRef.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, FileRef };