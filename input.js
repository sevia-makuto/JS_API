const number = process.argv[2];
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

if (number === 'add') {
    const result = add(parseInt(process.argv[3]), parseInt(process.argv[4]));
    console.log(`Result: ${result}`);
} else if (number === 'subtract') {
    const result = subtract(parseInt(process.argv[3]), parseInt(process.argv[4]));
    console.log(`Result: ${result}`);
} else {
    console.log('Invalid operation. Please use "add" or "subtract".');
}