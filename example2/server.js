/**
 * Created by toonew on 2017/9/27.
 */
const PORT = 33333;
const HOST = '127.0.0.1';
const ProtoBuf = require("protobufjs");
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

let builder = ProtoBuf.loadProtoFile("../lm/cover.message.proto");
let Cover = builder.build("cover");
let HelloCoverReq = Cover.helloworld.helloCoverReq;
let HelloCoverRsp = Cover.helloworld.helloCoverRsp;

server.on('listening', function () {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
  console.log(remote.address + ':' + remote.port + ' - ' + message);
  console.log(HelloCoverReq.decode(message) + 'from client!');
  var hCRsp = new HelloCoverRsp({
    retcode: 0,
    reply: 'Yeah!I\'m handsome cover!'
  });

  var buffer = hCRsp.encode();
  message = buffer.toBuffer();
  server.send(message, 0, message.length, remote.port, remote.address, function (err, bytes) {
    if (err) {
      throw err;
    }

    console.log('UDP message reply to ' + remote.address + ':' + remote.port);
  })

});

server.bind(PORT, HOST);