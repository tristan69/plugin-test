/*global cordova, module*/

var exec = require('cordova/exec');

var Echo = function () {};
/*
Echo.echo = function (message) {
    exec(echoSuccess, echoError, "Echo", "echo", [message]);
};
*/
Echo.prototype.echo = function(msg, onSuccess, onError) {
	var successCallback = function(obj) {
		onSuccess(obj);
	};	
	
	var errorCallback = function(obj) {
		onError(obj);
	};

	exec(successCallback, errorCallback, 'Echo', 'echo', [msg]);
};
/*
echoSuccess = function (data) {
	window.alert("OK : " + data)
}

echoError = function (data) {
	window.alert("PAS OK : " + data)
}
*/
module.exports = Echo;
