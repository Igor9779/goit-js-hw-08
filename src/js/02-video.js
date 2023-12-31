import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player', {
    id: "vimeo-player",
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

function updateTime() {
    player.getCurrentTime().then(function(currentTime) {
        localStorage.setItem('videoplayer-current-time', currentTime);
    }).catch(function(error) {
        console.log('Error getting the current time:', error);
    });
};

const throttledUpdateTime = throttle(updateTime, 1000);

const saveTimeVideo = localStorage.getItem('videoplayer-current-time');
if (saveTimeVideo) {
    player.setCurrentTime(saveTimeVideo).then(function (seconds) {
        console.log('The alarm position is set to ', seconds, 'seconds');
    }).catch(function (error) {
        // console.log('Error setting the current time:', error);
    });
};

player.on('timeupdate', throttledUpdateTime);