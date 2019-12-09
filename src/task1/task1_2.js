const fs = require('fs');
const csv = require('csvtojson');
const { pipeline } = require('stream');

const errorHandler = require('../core/utils/errorHandler');
const { CSV_FILE_PATH, TXT_FILE_PATH } = require('../core/constants/global');

const readFromFile = csv().fromFile(CSV_FILE_PATH);
const writeToFile = fs.createWriteStream(TXT_FILE_PATH);

pipeline(
    readFromFile,
    writeToFile,
    errorHandler
);
