module.exports = (sequelize, DataType) => {
    let post = sequelize.define("post", {
        title: {
            type: DataType.STRING(45),
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        text: {
            type: DataType.TEXT,
            validate: {
                notEmpty: true,
                notNull: true
            }
        }
    });

    post.associate = (model) => {
        model.post.belongsTo(model.user, {
            onDelete: "NO ACTION",
            foreignkey: {
                allowNull: false
            }
        });

        model.comment.hasMany(model.comment, {
            onDelete: "CASCADE",
            foreignkey: {
                allowNull: false
            }
        });
    };

    return post;
};