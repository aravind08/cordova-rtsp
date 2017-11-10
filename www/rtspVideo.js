'use strict';

var exec = require('cordova/exec');

function rtspVideo(){};

rtspVideo.prototype.play = function(uri, success, failure) {
    // fire
    exec(
        success,
        failure,
        'RTSPStream',
        'play',
        [uri]
    );
};

rtspVideo.prototype.pause = function(success, failure) {
    // fire
    exec(
        success,
        failure,
        'RTSPStream',
        'pause',
        []
    );
};

rtspVideo.prototype.resume = function(success, failure) {
    // fire
    exec(
        success,
        failure,
        'RTSPStream',
        'resume',
        []
    );
};

rtspVideo.prototype.stop = function(success, failure) {
    // fire
    exec(
        success,
        failure,
        'RTSPStream',
        'stop',
        []
    );
};


rtspVideo.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}
	window.plugins.rtspVideo = new rtspVideo();
	return window.plugins.rtspVideo;
};

cordova.addConstructor(rtspVideo.install);
