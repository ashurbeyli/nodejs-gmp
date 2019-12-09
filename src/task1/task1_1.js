process.stdin.setEncoding('utf8');

const reverseValue = function (value) {
    return value &&`${value.split('').reverse().join('')}\n`
};

const readFunc = function() {
    return process.stdin.read();
};

const writeFunc = function(data) {
    return process.stdout.write(data);
};

const dataHandler = function() {
    let chunk;
    while ((chunk = readFunc()) !== null) {
        const data = reverseValue(chunk);
        writeFunc(data);
    }
};

process.stdin.on('readable', dataHandler);