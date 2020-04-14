import express from 'express';

import GroupController from '../controllers/groupController';
import { GroupModel } from '../models/groupModel';
import { UserModel } from '../models/userModel';
import { UserGroupModel } from '../models/userGroupModel';
import GroupService from '../services/groupService';

const groupService = new GroupService(GroupModel, UserModel, UserGroupModel);
const groupController = new GroupController(groupService);

const router = express.Router();

router.route('/')
    .get(groupController.getGroups)
    .post(groupController.createGroup);
router.route('/:id')
    .get(groupController.getGroupById)
    .put(groupController.updateGroup)
    .delete(groupController.deleteGroup);
router.route('/:id/users')
    .get(groupController.getGroupUsers)
    .post(groupController.addUsersToGroup);

export default router;
