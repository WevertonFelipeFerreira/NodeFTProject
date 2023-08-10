import { DataTypes } from "sequelize";
import sequelize from "../utils/database";

const User = sequelize.define('users',{
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, { underscored: true });

export default User;