var exec = require('cordova/exec');

var Echo = function () {};

Echo.echo = function (message) {
    exec(echoSuccess, echoError, "Echo", "echo", [message]);
};

echoSuccess = function () {};

echoError = function () {};

module.exports = Echo;