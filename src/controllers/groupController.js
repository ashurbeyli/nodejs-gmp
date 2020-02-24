import { DEFAULT_PAGE, PAGE_LIMIT } from '../config/global';
import { GroupModel } from '../models/groupModel';
import { UserModel } from '../models/userModel';
import { UserGroupModel } from '../models/userGroupModel';
import GroupService from '../services/groupService';
import { BAD_REQUEST } from 'http-status-codes';

const groupService = new GroupService(GroupModel, UserModel, UserGroupModel);

const getGroups = (req, res) => {
    const { page = DEFAULT_PAGE } = req.params;
    return groupService
        .getGroups(page, PAGE_LIMIT)
        .then(data => res.json(data))
        .catch(err => res.status(BAD_REQUEST).send(err));
};
const getGroup = (req, res) => groupService
    .getGroupById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(BAD_REQUEST).send(err));

const createGroup = (req, res) => {
    const data = req.body;
    return groupService
        .addGroup(data)
        .then(user => res.json(user))
        .catch(err => res.status(BAD_REQUEST).send(err));
};
const updateGroup = (req, res) => groupService
    .updateGroup(req.params.id, req.body)
    .then(user => res.json(user))
    .catch(err => res.status(BAD_REQUEST).send(err));

const removeGroup = (req, res) => groupService
    .deleteGroup(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(BAD_REQUEST).send(err));

const addUsersToGroup = (req, res) => {
    const groupId = req.body.group_id;
    const userIds = req.body.user_ids;
    return groupService
        .addUsersToGroup(groupId, userIds)
        .then(group => res.json(group))
        .catch(err => res.status(BAD_REQUEST).send(err));
};

const getGroupUsers = (req, res) => {
    const groupId = req.params.id;
    return groupService.getGroupUsers(groupId).then(group => res.json(group));
};

export {
    getGroups,
    getGroup,
    createGroup,
    updateGroup,
    removeGroup,
    addUsersToGroup,
    getGroupUsers
};
