import { DEFAULT_PAGE, PAGE_LIMIT } from '../config/global';
import { GroupModel } from '../models/groupModel';
import { UserModel } from '../models/userModel';
import { UserGroupModel } from '../models/userGroupModel';
import GroupService from '../services/groupService';

const groupService = new GroupService(GroupModel, UserModel, UserGroupModel);

const get = (req, res) => {
    const { page = DEFAULT_PAGE } = req.params;
    return groupService.getGroups(page, PAGE_LIMIT).then(data => res.json(data));
};
const getOne = (req, res) => groupService.getGroupById(req.params.id).then(user => res.json(user));
const post = (req, res) => {
    const data = req.body;
    return groupService.addGroup(data).then(user => res.json(user));
};
const put = (req, res) => groupService.updateGroup(req.params.id, req.body).then(user => res.json(user));
const remove = (req, res) => groupService.deleteGroup(req.params.id).then(user => res.json(user));

const addUsersToGroup = (req, res) => {
    const groupId = req.body.group_id;
    const userIds = req.body.user_ids;
    return groupService.addUsersToGroup(groupId, userIds).then(group => res.json(group));
};

const getGroupUsers = (req, res) => {
    const groupId = req.params.id;
    return groupService.getGroupUsers(groupId).then(group => res.json(group));
};

export {
    get,
    getOne,
    post,
    put,
    remove,
    addUsersToGroup,
    getGroupUsers
};
