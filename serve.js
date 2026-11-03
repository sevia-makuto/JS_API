import Http from "http";
const server = Http.createServer((req , res) =>{
    res.writeHead(200,{ 'Content-Type': 'text/plain'});
    if (req.url === "/") {
        res.end("Welcome to professor backend server");
    } else if (req.url === "/about") {
        res.end("This is the about page");
    } else if (req.url === "/contact") {
        res.end("This is the contact page");
    }else if (req.url === "/news") {
        res.end("This is the news page");
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
})

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
console.log(`Server is running on http://${host}:${port}`);
server.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});