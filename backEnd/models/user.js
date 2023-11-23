module.exports = (sequelize, DataTypes) => {
    //  creat a user
        const User = sequelize.define('user', 
        {
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            freezeTableName: true  // not to preulize our product name
        });
    
        return User;
    
    };