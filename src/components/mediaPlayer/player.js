import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
const { 
    PlayPause, 
    MuteUnmute ,
    CurrentTime,
    Progress,
    SeekBar,
    Duration,
    Volume,
    Fullscreen,
} = controls

class MediaPlayer extends Component {
  render() {
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
            <CurrentTime />
            <Progress/>
            <SeekBar/>
            <Duration/>
            <Volume/>
            <Fullscreen/>

          </div>
        </div>
      </Media>
    )
  }
}
export default MediaPlayer