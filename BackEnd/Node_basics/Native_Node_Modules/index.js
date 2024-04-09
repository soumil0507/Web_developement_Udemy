// FileSystem

const { log } = require("console");
const fs = require("fs");

fs.writeFile("message.txt", "Hello World! from NodeJS!", (err)=>{
    if (err) throw err;
    console.log("The file has been successfully written");
});

fs.readFile("message.txt", 'utf8',(err, data)=>{
    if (err) throw err;
    console.log("The file has been successfully read");
    console.log("Contents->",data);
})