/*global cordova, module*/

var exec = require('cordova/exec');

var Echo = function () {};

Echo.echo = function () {
    exec(echosuccess, echoerror, "Echo", "echo", ["coucou"]);
};

echosuccess = function (data) {
	Console.log("OK : " + data)
}

echoerror = function (data) {
	Console.log("PAS OK : " + data)
}

module.exports = Echo;

/*

function initial(){
    var coucou = "coucou";
    cordova.exec(echoSuccess, echoFailure, "Echo", "echo", [coucou]);
}

function echoSuccess(data){
    alert("OK: " + data);
}

function echoFailure(data){
    alert("FAIL: " + data);
}

*/