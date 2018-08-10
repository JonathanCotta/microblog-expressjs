const sequelize = require("sequelize");
const con       = new sequelize('mysql://root:kilo1234@localhost:3306/blog',{operatorsAliases: false});
const db        = {};

db.post       = require("./post");
db.user       = require("./user");
db.comment    = require("./comment");
db.sequelize  = sequelize;
db.connection = con;

db.user.associate(db);
db.post.associate(db);
db.comment.associate(db);