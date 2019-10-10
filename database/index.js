const sequelize = require("sequelize");
const config    = require("../config");
const con       = new sequelize(config.database ,{operatorsAliases: false});
const db        = {};

db.post       = require("../models/post");
db.user       = require("../models/user");
db.comment    = require("../models/comment");
db.sequelize  = sequelize;
db.connection = con;

db.user.associate(db);
db.post.associate(db);
db.comment.associate(db);

module.exports = db;