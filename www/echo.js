var exec = require('cordova/exec');

var Echo = function (message) {
    exec(echoSuccess, echoError, "Echo", "echo", [message]);
};

echoSuccess = function (data) {
	window.alert("OK : " + data)
}

echoError = function (data) {
	window.alert("PAS OK : " + data)
}

module.exports = Echo;