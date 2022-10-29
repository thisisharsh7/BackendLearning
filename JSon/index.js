const bioData = {
    name: "harsh",
    bday: 30,
    work: "web developer"
}
// console.log(bioData.work);
//to convert object into JSON data
// const JsonData = JSON.stringify(bioData);
// console.log(JsonData);
//to convert Json data into its previous state
// const getData = JSON.parse(JsonData);
// console.log(getData);

//task to do

const fs = require('fs');

const data = JSON.stringify(bioData);
// fs.writeFile('index1.json', data, (err) => {
//     console.log('file has been created and updated');
// })
fs.readFile('index1.json', "utf-8", (err,data) => { console.log('file read done');
console.log(JSON.parse(data)); });
