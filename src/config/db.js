import Sequelize from 'sequelize';

import config from './sequelize';
import { SEQUELIZE_AUTHENTICATE_FAIL, SEQUELIZE_AUTHENTICATED, SEQUELIZE_SYNC_FAIL, SEQUELIZE_SYNCED } from './messages';
import { DEFAULT_ENVIRONMENT } from './global';

const sequelize = new Sequelize(config[process.env.NODE_ENV || DEFAULT_ENVIRONMENT]);
const successfullAuth = () => console.log(SEQUELIZE_AUTHENTICATED);
const failedAuth = () => console.error(SEQUELIZE_AUTHENTICATE_FAIL);
const successfullSync = () => console.log(SEQUELIZE_SYNCED);
const failedSync = () => console.log(SEQUELIZE_SYNC_FAIL);

sequelize.authenticate().then(successfullAuth).catch(failedAuth);
sequelize.sync().then(successfullSync).catch(failedSync);

export default sequelize;
