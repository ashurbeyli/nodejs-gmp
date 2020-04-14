import { DEFAULT_ENV, ENV_FILE_EXT } from './constants';


const prepareFilePath = (name) => `dotenv/${name}.${ENV_FILE_EXT}`;
const getEnvFilePath = () => process.env.NODE_ENV ? prepareFilePath(process.env.NODE_ENV) : prepareFilePath(DEFAULT_ENV);

export {
    getEnvFilePath
}