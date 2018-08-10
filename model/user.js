module.exports = (sequelize, DataType) => {
    let user = sequelize.define("user", {
        name: {
            type: DataType.STRING(45),
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        password: {
            type: DataType.STRING(64),
            validate: {
                notEmpty: true,
                notNull: true
            }
        }
    });

    comment.associate = (model) => {
        model.comment.hasMany(model.post, {
            as: "author",
            onDelete: "NO ACTION",
            foreignkey: {
                allowNull: false
            }
        });
    };

    return user;
};