import promiseFactory from '../core/utils/promiseFactory';
import { hashPassword } from '../core/utils/passwordUtils';

class UserService {
    constructor(userModel) {
        this.model = userModel;
    }
    getUsers(page, limit) {
        const promiseFn = this.model.findAll({ offset: page * limit, limit, where: { isDeleted: false } });
        return promiseFactory(promiseFn);
    }
    getUserById(id) {
        const promiseFn = this.model.findOne({ where: { id } });
        return promiseFactory(promiseFn);
    }
    getUserByUsername(username) {
        const promiseFn = this.model.findOne({ where: { username } });
        return promiseFactory(promiseFn);
    }
    createUser({password, ...rest}) {
        const promiseFn = this.model.create({ ...rest, password: hashPassword(password) });
        return promiseFactory(promiseFn);
    }
    updateUser(id, { password, ...rest }) {
        const promiseFn = this.model.update({ ...rest, password: hashPassword(password) }, { where: { id } });
        return promiseFactory(promiseFn);
    }
    deleteUser(id) {
        const promiseFn = this.model.update({ isDeleted: true }, { where: { id } });
        return promiseFactory(promiseFn);
    }
}

export default UserService;
