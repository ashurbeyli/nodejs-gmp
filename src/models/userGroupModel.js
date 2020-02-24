import uuid from 'uuid/v1';
import { DataTypes } from 'sequelize';

import db from '../config/db';
import { UserModel, userModelTableName, userTableId } from './userModel';
import { GroupModel, groupModelTableName, groupTableId } from './groupModel';

const userGroupModelTableName = 'user_group';
const userGroupUserId = 'user_id';
const userGroupGroupId = 'group_id';
const UserGroupModel = db.define(userGroupModelTableName, {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: () => uuid()
    },
    [userGroupUserId]: {
        type: DataTypes.UUID,
        references: {
            model: userModelTableName,
            key: userTableId
        },
        allowNull: false
    },
    [userGroupGroupId]: {
        type: DataTypes.UUID,
        references: {
            model: groupModelTableName,
            key: groupTableId
        },
        defaultValue: false
    }
}, {
    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: [userGroupUserId, userGroupGroupId]
        }
    ]
});

UserGroupModel.belongsTo(UserModel, { foreignKey: userGroupUserId });
UserGroupModel.belongsTo(GroupModel, { foreignKey: userGroupGroupId });

export {
    userGroupModelTableName,
    UserGroupModel
};
