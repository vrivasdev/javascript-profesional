class MediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>

    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlugins()
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }

    play() {
        this.media.play()
    }

    pause() {
        this.media.pause()
    }

    isPaused() {
        return this.media.paused
    }

    togglePlay() {
        if (this.media.paused) {
            this.play()
        }
        else {
            this.pause()
        }
    }

    toggleMute() {
        this.media.muted ? this.unmute() : this.mute()
    }

    mute() {
        this.media.muted = true
    }
    
    unmute() {
        this.media.muted = false
    }
}

export default MediaPlayer