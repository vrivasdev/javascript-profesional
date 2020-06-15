class MediaPlayer {
    media: HTMLMediaElement
    container: HTMLElement
    plugins: Array<any>

    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlayer()
        this.initPlugins()
    }

    private initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
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