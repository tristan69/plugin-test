var exec = require('cordova/exec');

var Echo = function () {};

Echo.echo = function (message) {
    exec(echoSuccess, echoError, "Echo", "echo", [message]);
};

Echo.test1 = function (){
	window.alert("DEBUT")
	var SerialPort = require("serialport");
	var serialPort = new SerialPort("/dev/ttyUSB0", {baudrate: 9600, autoOpen: false});
	// create a modbus client using the serial port
	var ModbusRTU = require("modbus-serial");
	var client = new ModbusRTU(serialPort);
	// open connection to a serial port
	client.open();
	window.alert("FIN")
};

echoSuccess = function (data) {
	window.alert("OK : " + data)
}

echoError = function (data) {
	window.alert("PAS OK : " + data)
}

module.exports = Echo;
