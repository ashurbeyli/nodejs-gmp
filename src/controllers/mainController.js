import { SERVER_IS_RUNNING } from '../core/constants';

const healthCheck = (req, res) => res.send(SERVER_IS_RUNNING);

export {
    healthCheck
};
