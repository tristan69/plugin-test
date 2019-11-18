var exec = require('cordova/exec');
var ModbusRTU = require('modbus-serial');

var client = new ModbusRTU();

client.connectRTU("/dev/ttyUSB0", {baudRate: 9600}, write);

var Echo = function () {};

Echo.echo = function (message) {
    exec(echoSuccess, echoError, "Echo", "echo", [message]);
};

Echo.test = function () {
	exec(echoSuccess, echoError, "Echo", "test", [message]);
}

echoSuccess = function (data) {
	window.alert("OK : " + data)
}

echoError = function (data) {
	window.alert("PAS OK : " + data)
}

module.exports = Echo;


// connect to sever
var socket = io("ws://127.0.0.1:3000/");

// set up socket.on for data received from sever
// server trigger 'data' event when data is received from device.
socket.on('data', function(data){
    console.log('received:', data);
    
});

// ask server to get registers
// "Read Input Registers" (FC=04) 
socket.emit("readInputRegisters", {
    "unit": 1,
    "address": 0,
    "length": 10
});

// subscribe to get holding registers every 1000ms
// "Read Holding Registers" (FC=04) 
socket.emit("readHoldingRegisters", {
    "unit": 1,
    "address": 0,
    "length": 10,
    "interval": 1000
});

// ask server to set one coil
// "Force one coil" (FC=5)
socket.emit('writeCoil', {
    "unit": 1,
    "address": 8,
    "state": true
});

// ask server to set registers
// "Preset Multiple Registers" (FC=16)
socket.emit('writeRegisters', {
    "unit": 1,
    "address": 8,
    "values": [88,123,47]
});

// ask server to get coils
// "Read coils" (FC=01) 
socket.emit("readCoils", {
    "unit": 1,
    "address": 0,
    "length": 8
});