import Player from '@vimeo/player';
import throttle from "lodash.throttle";


const VIDEO_TIME = 'videplayer-cuttent-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(stopTime, 1000));
currentTimePlayer();

function stopTime(timeUpdate) {
    let timePause = timeUpdate.seconds;
    console.log(timePause);

    localStorage.setItem(VIDEO_TIME, timePause);
}

function currentTimePlayer() {
    const pause = localStorage.getItem(VIDEO_TIME);

    if (pause) {
        player.setCurrentTime(pause);
    }
}