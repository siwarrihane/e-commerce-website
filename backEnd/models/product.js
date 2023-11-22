module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sellername: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
        },
        // Add the image column
        image: {
            type: DataTypes.BLOB('long'),
        },
    }, {
        freezeTableName: true,
    });

    return Product;
};