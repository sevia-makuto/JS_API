const os = require('os');
console.log(`Operating System: ${os.type()}`);
console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Free Memory: ${os.freemem()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);