/*global cordova, module*/

var exec = require('cordova/exec');

var Echo = function () {};

Echo.echo = function (message) {
    exec(echosuccess, echoerror, "Echo", "echo", [message]);
};

echosuccess = function (data) {
	window.alert("OK : " + data)
}

echoerror = function (data) {
	window.alert("PAS OK : " + data)
}

module.exports = Echo;
