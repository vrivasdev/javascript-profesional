import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")
const playButton = document.querySelector("#play")
const muteButton = document.querySelector("#mute")

const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(), 
        new AutoPause()
    ] 
})

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute() 

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message)
    })
}