/**
 * Created by toonew on 2017/9/27.
 */
const dgram = require('dgram');
const ProtoBuf = require("protobufjs");
const PORT = 33333;
const HOST = '127.0.0.1';

let buidler = ProtoBuf.loadProtoFile('../lm/cover.message.proto');
let Cover = buidler.build("cover");
let HelloCoverReq = Cover.helloworld.helloCoverReq;
let HelloCoverRsp = Cover.helloworld.helloCoverRsp;

let hCReq = new HelloCoverReq({
  name: 'R U coverguo?'
});

let buffer = hCReq.encode();

var socket = dgram.createSocket({
  type: 'udp4',
  fd: 8080
}, function (err, message) {
  if (err)
    console.log(err);
  else
    console.log(message);
});


var message = buffer.toBuffer();

socket.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
  if (err) {
    throw err;
  }

  console.log('UDP message sent to ' + HOST + ':' + PORT);
});

socket.on("message", function (msg, rinfo) {
  console.log("[UDP-CLIENT] Received message: " + HelloCoverRsp.decode(msg).reply + " from " + rinfo.address + ":" + rinfo.port);
  console.log(HelloCoverRsp.decode(msg));

  socket.close();

  //udpSocket = null;
});

socket.on('close', function () {
  console.log('socket closed.');


});

socket.on('error', function (err) {
  socket.close();

  console.log('socket err');
  console.log(err);
});