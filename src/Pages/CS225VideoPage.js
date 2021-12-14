import React, { Component } from 'react'
import ReactPlayer from 'react-player'

function CS225VideoPage() {
    return (
    <div className='player-wrapper'>
        <ReactPlayer
        className='react-player fixed-bottom'
        url= 'videos/cs225_final_project_video.MP4'
        width='100%'
        height='100%'
        controls = {true}

        />
    </div>
    )
}

export default CS225VideoPage;