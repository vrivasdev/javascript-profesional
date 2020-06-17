import MediaPlayer from '@vrivasdev/platzimediaplayer/src/MediaPlayer'
import AutoPlay from '@vrivasdev/platzimediaplayer/src/plugins/AutoPlay'
import AutoPause from '@vrivasdev/platzimediaplayer/src/plugins/AutoPause'
import Ads from '@vrivasdev/platzimediaplayer/src/plugins/Ads';

const video = document.querySelector("video")
const playButton:HTMLElement = document.querySelector("#play")
const muteButton:HTMLElement = document.querySelector("#mute")

const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(), 
        new AutoPause(),
        new Ads()
    ]
})

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute() 

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message)
    })
}