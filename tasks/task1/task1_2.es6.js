import fs from 'fs';
import csv from 'csvtojson';
import { pipeline } from 'stream';
import errorHandler from './utils/errorHandler.es6';

const csvFilePath = 'files/node_mentoring_t1_2_input_example.csv';
const txtFilePath = 'files/data.txt';

pipeline(
    csv().fromFile(csvFilePath),
    fs.createWriteStream(txtFilePath),
    errorHandler
);
