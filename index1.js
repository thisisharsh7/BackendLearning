//using built in module of node
//here fs stands for file system
//here we are seeing the use of fs module for which we must have to require it that's why we have to write require(name of the module) and then store it in some constant .So that u can use it further in your code.
const fs = require("fs");

//creating a file with this command it create the new empty file with the filename we give and write the data i.e second parameter.
//however if file exist it makes it empty and add the data i.e second parameter.
fs.writeFileSync("read.txt","hey there i am creating a file");

//adding the text to the existing file
fs.appendFileSync("read.txt","this is harsh");

//reading the text from the existing file
const buf_data = fs.readFileSync("read.txt");
//output for this is a buffer.
//node js has an additional data type called buffer.
//not available in browser javaScript
//buffer is mainly used to store binary data,
//while reading from a file or receiving packets over the network
org_data = buf_data.toString();
console.log(org_data);

fs.renameSync('no.txt','read.txt');
fs.renameSync('OINtro','Intro');