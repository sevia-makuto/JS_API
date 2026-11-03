function getStudentName(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("John Doe");
        }, 2000);   
    });
}
async function displayStudentName(){
    console.log("Fetching student name...");
    const name = await getStudentName();
    console.log(`Student Name: ${name}`);
}
displayStudentName();   