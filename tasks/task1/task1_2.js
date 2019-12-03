const fs = require('fs');
const csv = require('csvtojson');
const { pipeline } = require('stream');
const errorHandler = require('./utils/errorHandler');

const csvFilePath = 'files/node_mentoring_t1_2_input_example.csv';
const txtFilePath = 'files/data.txt';

pipeline(
    csv().fromFile(csvFilePath),
    fs.createWriteStream(txtFilePath),
    errorHandler
);
