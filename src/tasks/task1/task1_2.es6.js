import fs from 'fs';
import csv from 'csvtojson';
import { pipeline } from 'stream';

import { errorHandler } from '../core/utils/errorHandler.es6';
import { CSV_FILE_PATH, TXT_FILE_PATH } from '../core/constants/global.es6';

const readFromFile = csv().fromFile(CSV_FILE_PATH);
const writeToFile = fs.createWriteStream(TXT_FILE_PATH);

pipeline(
    readFromFile,
    writeToFile,
    errorHandler
);
