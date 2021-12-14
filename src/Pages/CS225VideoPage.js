import React, { Component } from 'react'
import ReactPlayer from 'react-player'

function CS225VideoPage() {
    return (
    <div className='player-wrapper'>
        <ReactPlayer
            url= 'https://www.youtube.com/watch?v=shq7WGdE8r4'
            controls = {true}
            muted={false}
            playing={true}
            height='100%'
            width='100%'

        />
    </div>
    )
}

export default CS225VideoPage;