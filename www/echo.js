var exec = require('cordova/exec');

var echo = function (message) {
    exec(echoSuccess, echoError, "Echo", "echo", [message]);
};

echoSuccess = function (data) {
	window.alert("OK : " + data)
}

echoError = function (data) {
	window.alert("PAS OK : " + data)
}

module.exports = Echo;