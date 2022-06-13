import { DataTypes, Model } from "sequelize";
import { sequelize } from '../../../loaders/sequelize';
import { AuthDocument } from "../../../utils";
import { UserModel } from "../auth/model";


export const TodoItem = sequelize.define('Todo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
});

TodoItem.belongsTo(UserModel);
UserModel.hasMany(TodoItem);

