import uuid from 'uuid/v1';
import Sequelize, { DataTypes } from 'sequelize';

import db from '../config/db';

const UserModel = db.define('users', {
    id: {
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

module.exports = UserModel;
