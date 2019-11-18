var exec = require('cordova/exec');
var ModbusRTU = require("modbus-serial");

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