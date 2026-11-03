const student =[
    { name: "John Doe", age: 20, major: "Computer Science", gpa: 4.8 },
    { name: "Jane Smith", age: 22, major: "Mathematics", gpa: 4.9 }
];

const studentJson = JSON.stringify(student);
console.log('Students as JSON:\n' + studentJson);

//save as a file
const fs = require('fs');
fs.writeFileSync('students.json', studentJson);
console.log('Students JSON saved to students.json');

//read from file
const data = fs.readFileSync('students.json', 'utf8');
const studentsFromFile = JSON.parse(data);
console.log('Students read from file:', studentsFromFile);

//append new data to the file
const newStudent = { name: "Alice Johnson", age: 21, major: "Physics", gpa: 4.7 };
studentsFromFile.push(newStudent);
fs.writeFileSync('students.json', JSON.stringify(studentsFromFile));
console.log('Updated students JSON saved to students.json');