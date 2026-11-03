const fs = require('fs');
// //create a file
// fs.writeFile('example.txt', 'This is an example file.', (err) => {
//     if (err) throw err;
//     console.log('File created successfully.');
// });

// //read a file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File content:', data);
// });

// //update a file
// fs.appendFile('example.txt', '\nThis is an appended line.', (err) => {
//     if (err) throw err;
//     console.log('File updated successfully.');
// });

// //delete a file
// fs.unlink('example.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully.');
// });

fs.writeFileSync('student.txt', 'name: John Doe\nage: 20\nmajor: Computer Science\n');
console.log('File created successfully.');

// const data = fs.readFileSync('student.txt', 'utf8');
// console.log('File content:', data);

fs.appendFileSync('student.txt', '\nGPA: 4.8\n');
console.log('File updated successfully.');


fs.unlinkSync('example.txt');
console.log('File deleted successfully.');