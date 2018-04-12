var test = require('./test.js');
require("./css/index.css");
var data = require('./json/data.json');
console.log(data.text);
document.getElementById('root').appendChild(test());