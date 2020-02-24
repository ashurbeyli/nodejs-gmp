import uuid from 'uuid/v1';
import Sequelize, { DataTypes } from 'sequelize';

import db from '../config/db';

const permissions = ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'];

const groupModelTableName = 'groups';
const groupTableId = 'id';
const GroupModel = db.define(groupModelTableName, {
    [groupTableId]: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: () => uuid()
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    permissions: {
        type: Sequelize.ENUM,
        values: permissions
    }
});

export {
    groupTableId,
    groupModelTableName,
    GroupModel
};
