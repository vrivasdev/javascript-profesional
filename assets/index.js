
import MediaPlayer from './MediaPlayer.js' 

const video = document.querySelector("video")
const button = document.querySelector("button")
const player = new MediaPlayer({ el: video })

button.onclick = () =>{
    console.log('paused:', player.isPaused())
    if (player.isPaused()) {
    player.play()
    }
    else {
    player.pause()
    }
}