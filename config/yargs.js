const address = {
    alias: 'a',
    desc: 'Address to get the weather time',
    demand: true
};

const argv = require('yargs').options({
    address
}).argv;

module.exports = {
    argv
}