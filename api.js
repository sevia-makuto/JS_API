import express from 'express';
const app = express();
const PORT = 3000;
const HOST = 'localhost';
app.use(express.json());

const students = [
    { id: 1, name: "John Doe", age: 20, major: "Computer Science",gpa: 4.8 },
    { id: 2, name: "Jane Smith", age: 22, major: "Mathematics",gpa: 4.9 }
];
//post
app.post('/students',(req , res) =>{
    const { name, age, major, gpa } = req.body;
    if(!name || !age || !major || !gpa){
        return res.status(400).json({ message: "All fields are required" });
    }
    if(typeof name !== 'string' || typeof age !== 'number' || typeof major !== 'string' || typeof gpa !== 'number'){
        return res.status(400).json({ message: "Invalid data types" });
    }
    if(age <0 || age>100){
        return res.status(400).json({ message: "Age must be between 0 and 100" });
    }
    if(gpa <0 || gpa>6.0){
        return res.status(400).json({ message: "GPA must be between 0 and 6.0" });
    }
    const existingStudent = students.find(s => s.name === name);
    if(existingStudent){
        return res.status(400).json({ message: "Student with this name already exists" });
    }
    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age,
        major: major,
        gpa: gpa
    }
    students.push(newStudent);
  
    res.status(201).json({ message: "Student added successfully", student: newStudent });

   
})
//get all students
app.get('/students',(req ,res) =>{
    res.json(students);
});
//gets one student by id
app.get('/students/:id',(req ,res) =>{
    const studentsId = req.params.id;
    const student = students.find(s => s.id === parseInt(studentsId));
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json({
        message:"Student found",
        student: student    
    });
});
app.patch('/students/:id',(req ,res) =>{
    const studentsId = Number(req.params.id);
    const student = students.find(s => s.id === parseInt(studentsId));
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    const { name, age, major, gpa } = req.body;
    if(name !== undefined && typeof name !== 'string'){
        return res.status(400).json({ message: "Invalid data type for name" });
    }
    if(age !== undefined && typeof age !== 'number'){
        return res.status(400).json({ message: "Invalid data type for age" });
    }
    if(major !== undefined && typeof major !== 'string'){
        return res.status(400).json({ message: "Invalid data type for major" });
    }
    if(gpa !== undefined && typeof gpa !== 'number'){
        return res.status(400).json({ message: "Invalid data type for gpa" });
    }
    if(name !== undefined){
        student.name = name;
    }
    if(age !== undefined){
        student.age = age;
    }
    if(major !== undefined){
        student.major = major;
    }
    if(gpa !== undefined){
        student.gpa = gpa;
    }
    res.json({
        message: "Student updated successfully",
        student: student
    });
});
app.delete('/students/:id',(req ,res) =>{
    const studentsId = Number(req.params.id);
    const studentIndex = students.findIndex(s => s.id === parseInt(studentsId));
    if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found" });
    }
    const deletedStudent = students.splice(studentIndex, 1);
    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});
app.use((req ,res) =>{
    res.status(404).send("Page not found");
});

app.listen(PORT,HOST,() =>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
});