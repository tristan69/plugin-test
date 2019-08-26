/*global cordova, module*/
/*
var exec = require('cordova/exec');

var Echo = function () {};

Echo.echo = function () {
    exec(echosuccess, echoerror, "Echo", "echo", ["coucou"]);
};

function echosuccess(data) {
	Alert("OK : " + data)
}

function echoerror (data) {
	Alert("PAS OK : " + data)
}

module.exports = Echo;
*/

function initial(){
    var coucou = "coucou";
    cordova.exec(sayHelloSuccess, sayHelloFailure, "Echo", "echo", [coucou]);
}

function sayHelloSuccess(data){
    alert("OK: " + data);
}

function sayHelloFailure(data){
    alert("FAIL: " + data);
}