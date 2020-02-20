import promiseFactory from '../core/utils/promiseFactory';

class GroupService {
    constructor(groupModel, userModel, userGroupModel) {
        this.model = groupModel;
        this.userModel = userModel;
        this.userGroupModel = userGroupModel;
    }
    getGroups(page, limit) {
        const promiseFn = this.model.findAll({ offset: page * limit, limit });
        return promiseFactory(promiseFn);
    }
    getGroupById(id) {
        const promiseFn = this.model.findOne({ where: { id }, include: this.userGroupModel });
        return promiseFactory(promiseFn);
    }
    addGroup(data) {
        const promiseFn = this.model.create(data);
        return promiseFactory(promiseFn);
    }
    updateGroup(id, data) {
        const promiseFn = this.model.update({ ...data }, { where: { id } });
        return promiseFactory(promiseFn);
    }
    deleteGroup(id) {
        const promiseFn = this.model.destroy({ where: { id } });
        return promiseFactory(promiseFn);
    }
    addUsersToGroup(groupId, userIds) {
        const items = userIds.map(userId => ({ group_id: groupId, user_id: userId }));
        const promiseFn = this.userGroupModel.bulkCreate(items);
        return promiseFactory(promiseFn);
    }
    getGroupUsers(groupId) {
        const promiseFn = this.userGroupModel.findAll({ where: { group_id: groupId }, include: this.userModel });
        return promiseFactory(promiseFn);
    }
}

export default GroupService;
