const Object = require('../../src/DataObject/dataObject.js');
const arr = [];
const arg = process.argv.slice(2);
for(let i = 0; i < arg; i++){
    arr.push(new Object().createObject());
}
console.log(arr);

module.exports = arr;