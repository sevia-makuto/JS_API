const student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    gpa: 4.8
}

//convert into json
const studentJson = JSON.stringify(student);
console.log('Student as JSON:\n' + studentJson);

//save as a file
const fs = require('fs');
fs.writeFileSync('student.json', studentJson);
console.log('Student JSON saved to student.json');

//read from file
const data = fs.readFileSync('student.json', 'utf8');
const studentFromFile = JSON.parse(data);
console.table(studentFromFile);

//append new data to the file
const newData = { graduationYear: 2028 };
const updatedStudent = { ...studentFromFile, ...newData };
fs.writeFileSync('student.json', JSON.stringify(updatedStudent));
console.log('Updated student JSON saved to student.json');