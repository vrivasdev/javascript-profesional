import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const playButton = document.querySelector("#play")
const muteButton = document.querySelector("#mute")
const player = new MediaPlayer({ el: video, plugins: [] })

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()