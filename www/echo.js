var exec = require('cordova/exec');
var SerialPort = require("serialport");
var ModbusRTU = require("modbus-serial");

var Echo = function () {};

Echo.echo = function (message) {
    exec(echoSuccess, echoError, "Echo", "echo", [message]);
};

Echo.test = function (){
	
	window.alert("DEBUT");
	
	window.alert("Serialport : " SerialPort);
	
	window.alert("modbusserial : " ModbusRTU);
	
	window.alert("DEBUT Serialport");
	var serialPort = new SerialPort("/dev/ttyUSB0", {baudrate: 9600, autoOpen: false});
	
	window.alert("DEBUT modbus serial");
	var client = new ModbusRTU(serialPort);
	
	window.alert("DEBUT open");
	client.open();
	
	window.alert("FIN");
};

echoSuccess = function (data) {
	window.alert("OK : " + data)
}

echoError = function (data) {
	window.alert("PAS OK : " + data)
}

module.exports = Echo;
