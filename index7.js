//utility for working with file and directory
const path = require('path');

console.log(path.dirname('C:/Users/Harsh kumar/harshwork/nodeJs/index7.js'));//directory name
console.log(path.basename('C:/Users/Harsh kumar/harshwork/nodeJs/index7.js'));//base name 
console.log(path.extname('C:/Users/Harsh kumar/harshwork/nodeJs/index7.js'));//extension name

//for getting whole detail about the directory in one code we can write the below code
console.log(path.parse('C:/Users/Harsh kumar/harshwork/nodeJs/index7.js').name);