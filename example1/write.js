/**
 * Created by toonew on 2017/9/27.
 */
const HelloWorld = require('../lm/lm.message')['lm']['helloworld'];
const fs = require('fs');

let hw = new HelloWorld({
  'id': 101,
  'str': 'hello'
});

let buffer = hw.encode();

fs.writeFileSync('./test.log', buffer.toBuffer());

