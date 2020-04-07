import dotenv from 'dotenv';

import { getEnvFilePath } from './utils/getEnvFile';

dotenv.config({ path: getEnvFilePath() });