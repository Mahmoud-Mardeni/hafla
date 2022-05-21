const { printDiamond } = require('./diamond');

const args = process.argv.slice(2);

console.log(printDiamond(args[0]));
