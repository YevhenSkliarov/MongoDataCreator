const Object = require('../../src/DataObject/dataObject.js');
const arr = [];
for(let i = 0; i < 999; i++){
    arr.push(new Object().createObject());
}
console.log(arr);

module.exports = arr;