console.log("Start downloading...");
const startTime = Date.now();
setTimeout(() => {
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    console.log(`Download completed in ${timeTaken} seconds.`);
}, 3000);

console.log("Downloading...");