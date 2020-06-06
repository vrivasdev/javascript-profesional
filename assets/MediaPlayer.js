class MediaPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlugins()
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }
        this.plugins.forEach(plugin => {
            plugin.run(player)
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