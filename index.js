const math = require('./math.js');

const os = require('os');

var a = 6;
var b = 2;
console.log(`${a} + ${b} = ` + math.add(a,b));
console.log("Platform: " + os.platform());
console.log("Release: " + os.release());
console.log("Free mem: " + os.freemem*0.000001 + " Mb");
console.log("Total mem: " + os.totalmem*0.000001 + " Mb");

