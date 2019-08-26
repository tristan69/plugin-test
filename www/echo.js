/*global cordova, module*/

var exec = require('cordova/exec');

var Echo = function () {};

Echo.echo = function () {
    exec(null, null, "Echo", "echo", ["coucou"]);
};

module.exports = Echo;