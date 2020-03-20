import uuid from 'uuid/v1';
import { DataTypes, Sequelize } from 'sequelize';

import db from '../config/db';
import { UserModel, userModelTableName, userTableId } from './userModel';

const userAuthModelTableName = 'user_auth';
const userAuthUserId = 'user_id';
const UserAuthModel = db.define(userAuthModelTableName, {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: () => uuid()
    },
    [userAuthUserId]: {
        type: DataTypes.UUID,
        references: {
            model: userModelTableName,
            key: userTableId
        },
        allowNull: false
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: [userAuthUserId]
        }
    ]
});

UserAuthModel.belongsTo(UserModel, { foreignKey: userAuthUserId });

export {
    userAuthModelTableName,
    UserAuthModel
};
