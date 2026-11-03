function getStudentName(){
    return new Promise((resolve, reject) => {
        let isSuccess = true;
        if(isSuccess){
            resolve("student found");
        }else{
            reject("student not found");
        }
    });
}
async function displayStudentName(){
    try{
        const name = await getStudentName();
        console.log(name);
    }catch(error){
        console.log(`Error: ${error}`);
    }
}
displayStudentName();