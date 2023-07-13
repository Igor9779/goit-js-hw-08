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

player.setCurrentTime(36.456).then(function (seconds) {
    console.log('The alarm position is set to ', seconds, 'seconds');
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});


