import { BAD_REQUEST, OK, CREATED } from 'http-status-codes';

import { DEFAULT_PAGE, PAGE_LIMIT } from '../config/global';

class UserController {
    constructor(userService) {
        this.userService = userService;
        this.getUsers = this.getUsers.bind(this);
        this.getUser = this.getUserById.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    getUsers(req, res) {
        const { page = DEFAULT_PAGE, limit = PAGE_LIMIT } = req.params;
        return this.userService
            .getUsers(page, limit)
            .then(data => res.status(OK).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    };
    getUserById(req, res) { 
        return this.userService
            .getUserById(req.params.id)
            .then(data => res.status(OK).json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    }
    createUser(req, res) {
        const body = req.body;
        return this.userService
            .createUser(body)
            .then(user => res.status(CREATED).json(user))
            .catch(err => res.status(BAD_REQUEST).send(err));
    };
    updateUser(req, res) { 
        return this.userService
        .updateUser(req.params.id, req.body)
        .then(data => res.status(OK).json(data))
        .catch(err => res.status(BAD_REQUEST).send(err));
    }
    deleteUser(req, res) { 
        return this.userService
        .deleteUser(req.params.id)
        .then(data => res.status(OK).json(data))
        .catch(err => res.status(BAD_REQUEST).send(err));
    }

}

export default UserController;