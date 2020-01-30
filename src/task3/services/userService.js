class UserService {
    constructor(userModel) {
        this.model = userModel;
    }
    getUsers(page, limit) {
        return new Promise((resolve, reject) => this.model.findAll({ offset: page * limit, limit, where: { isDeleted: false } }).then(users => {
            resolve(users);
        }).catch(err => reject(err)));
    }
    getUserById(id) {
        return new Promise((resolve, reject) => this.model.findOne({ where: { id } }).then(user => {
            resolve(user);
        }).catch(err => reject(err)));
    }
    addUser(data) {
        return new Promise((resolve, reject) => this.model.create(data).then(user => {
            resolve(user);
        }).catch(err => reject(err)));
    }
    updateUser(id, data) {
        return new Promise((resolve, reject) => this.model.update({ ...data }, { where: { id } }).then(user => {
            resolve(user);
        }).catch(err => reject(err)));
    }
    deleteUser(id) {
        return new Promise((resolve, reject) => this.model.update({ isDeleted: true }, { where: { id } }).then(user => {
            resolve(user);
        }).catch(err => reject(err)));
    }
}

export default UserService;
