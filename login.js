const myPromise = new Promise((resolve ,reject) =>{
    let isLoggedin = true;
    if(isLoggedin){
        resolve("User logged in successfully!");
    }else{
        reject("User login failed!");
    }
});
myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Login process completed.");
});
