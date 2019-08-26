/*global cordova, module*/

var exec = cordova.require('cordova/exec');

var Hello = function() {
    console.log('HELLO READY');
};

Hello.prototype.say = function(msg, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'Hello', 'say', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = Hello;
}