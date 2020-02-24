import uuid from 'uuid/v1';
import Sequelize, { DataTypes } from 'sequelize';

import db from '../config/db';

const userModelTableName = 'users';
const userTableId = 'id';
const UserModel = db.define(userModelTableName, {
    [userTableId]: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: () => uuid()
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});


export  {
    userTableId,
    userModelTableName,
    UserModel
};
