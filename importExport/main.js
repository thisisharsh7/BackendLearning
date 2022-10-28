//creating our own module
//in node every js file is called module
//all the varriable in the file is private and we cannot use it outside the file

const text = 'calculator';
const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return a - b;
}
const multi = (a,b) =>{
    return a*b;
}
//exporting the moduel with all the varriable
// module.exports.var1 = add;
// module.exports.var2 = sub;
// module.exports.var3 = multi;
// module.exports.var4 = text;

//in simple we can write this

module.exports = {add , sub , multi , text};