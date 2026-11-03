
import fs from "node:fs/promises";

async function main(){
    await fs.writeFile("example.txt", "Hello, World!");
    const data = await fs.readFile("example.txt", "utf8");
    console.log(data);
}
main().catch((error) => {
    console.error("Error:", error);
});