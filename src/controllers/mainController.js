import { SERVER_IS_RUNNING } from '../core/constants';

const get = (req, res) => res.send(SERVER_IS_RUNNING);

export {
    get
};
