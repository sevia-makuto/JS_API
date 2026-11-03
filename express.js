import express from 'express';
const app= express();
const PORT= 3000;
const HOST= 'localhost';
//middlewares
app.use((req ,res ,next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
});
//routes

app.get('/',(req ,res) =>{
    res.send("Welcome to professor backend server");
});
app.get('/about',(req ,res) =>{
    res.send("This is the about page");
});
app.get('/contact',(req ,res) =>{
    res.send("This is the contact page");
});
app.get('/news',(req ,res) =>{
    res.send("This is the news page");
});
app.get('/students',(req ,res) =>{
    res.json(students);
});
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
app.use((req ,res) =>{
    res.status(404).send("Page not found");
});
app.listen(PORT,HOST,() =>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
});