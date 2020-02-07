import promiseFactory from '../core/utils/promiseFactory';

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
    addUser(data) {
        const promiseFn = this.model.create(data);
        return promiseFactory(promiseFn);
    }
    updateUser(id, data) {
        const promiseFn = this.model.update({ ...data }, { where: { id } });
        return promiseFactory(promiseFn);
    }
    deleteUser(id) {
        const promiseFn = this.model.update({ isDeleted: true }, { where: { id } });
        return promiseFactory(promiseFn);
    }
}

export default UserService;
