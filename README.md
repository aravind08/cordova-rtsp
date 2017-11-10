# Cordova RTSP Player
Cordova RTSP Video Player (Simple). 

# Installation

```sh
$ cordova plugin add https://github.com/aravind08/cordova-rtsp
```

# Using the plugin
Call play with video URL (RTSP) as argument. The video player will close after the video is completed playing.
```sh
window.plugins.rtspVideo.play('rtsp://your-ip/file.mp4', [successCallback], [failureCallback]);
```
Stop and close the video player
```sh
window.plugins.rtspVideo.stop();
```

# Example
```sh
window.plugins.rtspVideo.play('rtsp://your-ip/file.mp4', function () {
    console.log('Done Playing.');
}, function (e) {
    console.error('Error: ' + e);
});
```

# License
Cordova RTSP Video Player (Simple) is licensed under the Apache License (ASL) license. For more information, see the LICENSE file in this repository.
