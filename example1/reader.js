/**
 * Created by toonew on 2017/9/27.
 */
const HelloWorld = require('../lm/lm.message')['lm']['helloworld'];
const fs = require('fs');

let data = fs.readFileSync('test.log');
console.log(HelloWorld.decode(data));

