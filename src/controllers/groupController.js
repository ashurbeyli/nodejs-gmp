import { BAD_REQUEST, OK, CREATED } from 'http-status-codes';

import { DEFAULT_PAGE, PAGE_LIMIT } from '../config/global';

class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
        this.getGroups = this.getGroups.bind(this);
        this.getGroupById = this.getGroupById.bind(this);
        this.createGroup = this.createGroup.bind(this);
        this.updateGroup = this.updateGroup.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
        this.addUsersToGroup = this.addUsersToGroup.bind(this);
        this.getGroupUsers = this.getGroupUsers.bind(this);
    }

    getGroups (req, res)  {
        const { page = DEFAULT_PAGE } = req.params;
        return this.groupService
            .getGroups(page, PAGE_LIMIT)
            .then(data => res.status(OK).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    };
    getGroupById (req, res) { 
        return this.groupService
            .getGroupById(req.params.id)
            .then(data => res.status(OK).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    }

    createGroup (req, res) {
        const body = req.body;
        return this.groupService
            .createGroup(body)
            .then(data => res.status(CREATED).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    };
    updateGroup (req, res) {
        return this.groupService
            .updateGroup(req.params.id, req.body)
            .then(data => res.status(OK).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    }

    deleteGroup (req, res) {
        return this.groupService
            .deleteGroup(req.params.id)
            .then(data => res.status(OK).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    }

    addUsersToGroup (req, res)  {
        const groupId = req.body.group_id;
        const userIds = req.body.user_ids;
        return this.groupService
            .addUsersToGroup(groupId, userIds)
            .then(data => res.status(OK).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    };

    getGroupUsers (req, res)  {
        const groupId = req.params.id;
        return this.groupService
            .getGroupUsers(groupId)
            .then(data => res.status(OK).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    };

}

export default GroupController;
