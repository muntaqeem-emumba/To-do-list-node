import { DataTypes, Model } from "sequelize";
import { sequelize } from '../../../loaders/sequelize';


export const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export const RoleModel = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
        name: {
        type: DataTypes.STRING
    }
})

UserModel.belongsTo(RoleModel);
RoleModel.hasMany(UserModel);

