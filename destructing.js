const student ={
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    gpa: 4.8
}
// const{name, age, major, gpa} = student;
// console.log(`Name: ${name}, Age: ${age}, Major: ${major}, GPA: ${gpa}`);

function displayStudentInfo({name, age, major, gpa}){
    console.log(`Name: ${name}, Age: ${age}, Major: ${major}, GPA: ${gpa}`);
}
displayStudentInfo(student);