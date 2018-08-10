module.exports = (sequelize, DataType) => {
    let comment = sequelize.define("comment", {
        text: {
            type: DataType.TEXT("tiny"),
            validate: {
                notEmpty: true,
                notNull: true
            }
        }
    });

    comment.associate = (model) => {
        model.comment.belongsTo(model.post, {
            onDelete: "CASCADE",
            foreignkey: {
                allowNull: false
            }
        });
    };

    return comment;
};