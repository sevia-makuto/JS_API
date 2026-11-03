
// import HTTP from 'http';
// const students = {
//     ["John Doe"]: { age: 20, major: "Computer Science", gpa: 4.8 },
//     ["Jane Smith"]: { age: 22, major: "Mathematics", gpa: 4.9 }
// }

// const server = HTTP.createServer((req , res) =>{
//     if(req.url === '/students'){
//         res.writeHead(200,{ 'Content-Type': 'application/json'});
//         res.end(JSON.stringify(students));
//     }else{
//         res.writeHead(404,{ 'Content-Type': 'application/json'});
//         res.end(JSON.stringify({ message: "Route not found" }));
//     }
    
// })
// const port = process.env.PORT || 3000;
// const host = process.env.HOST || 'localhost';
// console.log(`Server is running on http://${host}:${port}`);
// server.listen(port,() =>{
//     console.log(`Server is running on port ${port}`);
// });