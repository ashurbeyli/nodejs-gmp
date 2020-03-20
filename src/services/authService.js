import promiseFactory from '../core/utils/promiseFactory';
import { createToken } from '../core/utils/passwordUtils';

class AuthService {
    constructor(authModel) {
        this.model = authModel;
    }

    setJwtToken(data) {
        const promiseFn = this.model.create({ user_id: data.user_id, token: createToken(data)});
        return promiseFactory(promiseFn);
    }

    getUserByToken(token) {
        const promiseFn = this.model.findOne({ where: { token } });
        return promiseFactory(promiseFn);
    }
}

export default AuthService;
